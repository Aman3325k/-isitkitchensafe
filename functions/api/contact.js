export async function onRequestPost(context) {
  try {
    const contentType = context.request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let honeypot = '';

    if (contentType.includes('application/json')) {
      const body = await context.request.json().catch(() => ({}));
      name = (body.name || '').trim();
      email = (body.email || '').trim();
      subject = (body.subject || '').trim();
      message = (body.message || '').trim();
      honeypot = body.b_name || '';
    } else {
      const formData = await context.request.formData().catch(() => new FormData());
      name = (formData.get('name') || '').trim();
      email = (formData.get('email') || '').trim();
      subject = (formData.get('subject') || '').trim();
      message = (formData.get('message') || '').trim();
      honeypot = formData.get('b_name') || '';
    }
    
    // Honeypot check (anti-spam)
    if (honeypot) {
      // Spam detected, silently accept with 200
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully.' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Input Validation
    if (!name || name.length < 2) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Please provide your name.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Please provide a valid email address.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!message || message.length < 5) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Please enter a message of at least 5 characters.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check Cloudflare Environment Variables
    const apiKey = context.env?.RESEND_API_KEY;
    const toEmail = context.env?.CONTACT_TO_EMAIL || 'support@isitkitchensafe.com';
    const fromEmail = context.env?.RESEND_FROM_EMAIL || 'IsItKitchenSafe Contact <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is not configured.');
      return new Response(JSON.stringify({
        success: false,
        message: 'The contact form is temporarily unavailable. Please email us directly at support@isitkitchensafe.com.'
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email via Resend API
    const emailSubject = subject 
      ? `[IsItKitchenSafe] ${subject} - from ${name}` 
      : `New Inquiry from ${name} via IsItKitchenSafe`;

    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}\n\n---\nSent via isitkitchensafe.com contact form`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: emailSubject,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errPayload = await resendResponse.json().catch(() => ({}));
      console.error('Resend API returned error:', errPayload);
      return new Response(JSON.stringify({
        success: false,
        message: 'Failed to deliver message via email provider. Please email us directly at support@isitkitchensafe.com.'
      }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Contact endpoint exception:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'An unexpected error occurred. Please email us directly at support@isitkitchensafe.com.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
