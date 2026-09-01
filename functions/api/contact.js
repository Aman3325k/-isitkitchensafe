export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    
    // Honeypot check
    const honeypot = formData.get('b_name');
    if (honeypot) {
      // Spam detected, silently accept
      return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const name = formData.get('name') || 'Unknown';
    const email = formData.get('email');
    const message = formData.get('message');

    if (!email || !message) {
      return new Response(JSON.stringify({ success: false, message: 'Email and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare MailChannels payload
    const payload = {
      personalizations: [
        {
          to: [
            {
              email: "isitkitchensafe.com@gmail.com",
              name: "Is It Kitchen Safe Contact"
            }
          ]
        }
      ],
      from: {
        email: "no-reply@isitkitchensafe.com",
        name: name
      },
      reply_to: {
        email: email,
        name: name
      },
      subject: `New Contact Form Submission from ${name}`,
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        }
      ]
    };

    const mcResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!mcResponse.ok) {
      const errorText = await mcResponse.text();
      console.error('MailChannels Error:', errorText);
      return new Response(JSON.stringify({ success: false, message: 'Failed to send message.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
