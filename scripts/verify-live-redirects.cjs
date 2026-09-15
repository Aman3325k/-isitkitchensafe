const https = require('https');

const testCases = [
  // Priority 1: Safety Contradictions
  { url: 'https://isitkitchensafe.com/airfryer/gold-silverware/', expectedLocation: '/airfryer/' },
  { url: 'https://isitkitchensafe.com/airfryer/mason-jar/', expectedLocation: '/airfryer/' },
  { url: 'https://isitkitchensafe.com/airfryer/pacifiers-silicone/', expectedLocation: '/airfryer/' },
  { url: 'https://isitkitchensafe.com/es/airfryer/gold-silverware/', expectedLocation: '/es/airfryer/' },
  
  // Priority 2: Category 1 Overlooked Pages
  { url: 'https://isitkitchensafe.com/refrigerator/cauliflower/', expectedLocation: '/refrigerator/fresh-cauliflower-head/' },
  { url: 'https://isitkitchensafe.com/oven/mason-jar-in-oven/', expectedLocation: '/oven/mason-jar/' },
  { url: 'https://isitkitchensafe.com/freezer/cucumbers/', expectedLocation: '/freezer/cucumber/' },
  { url: 'https://isitkitchensafe.com/freezer/tomatoes/', expectedLocation: '/freezer/tomato/' },
  { url: 'https://isitkitchensafe.com/dryer/denim-jacket/', expectedLocation: '/dryer/denim-jeans-pure-cotton/' },
  { url: 'https://isitkitchensafe.com/refreeze/cauliflower/', expectedStatus: [200] },
  { url: 'https://isitkitchensafe.com/what-happens/microwave-cd/', expectedStatus: [200] },

  // Priority 3: Category 2 Refrigerator Non-Food
  { url: 'https://isitkitchensafe.com/refrigerator/tupperware/', expectedLocation: '/refrigerator/' },
  { url: 'https://isitkitchensafe.com/refrigerator/aluminum-foil/', expectedLocation: '/refrigerator/' },
  { url: 'https://isitkitchensafe.com/refrigerator/baking-sheet/', expectedLocation: '/refrigerator/' },
  { url: 'https://isitkitchensafe.com/refrigerator/stanley-cup-tumbler/', expectedLocation: '/refrigerator/' },
  { url: 'https://isitkitchensafe.com/refrigerator/batteries/', expectedLocation: '/material/' },
  { url: 'https://isitkitchensafe.com/es/refrigerator/tupperware/', expectedLocation: '/es/refrigerator/' },

  // Priority 3: Category 3 Dryer Contradictions
  { url: 'https://isitkitchensafe.com/dryer/hats/', expectedLocation: '/dryer/' },
  { url: 'https://isitkitchensafe.com/dryer/shower-pouf/', expectedLocation: '/dryer/' },
  { url: 'https://isitkitchensafe.com/es/dryer/hats/', expectedLocation: '/es/dryer/' }
];

async function checkUrl(tc) {
  return new Promise((resolve) => {
    // Bust cache with a timestamp header or check directly
    const req = https.request(tc.url, { method: 'GET', headers: { 'User-Agent': 'RedirectTester/1.0' } }, (res) => {
      const status = res.statusCode;
      const location = res.headers.location || '';
      resolve({ url: tc.url, status, location, expectedLocation: tc.expectedLocation, expectedStatus: tc.expectedStatus });
    });
    req.on('error', (err) => {
      resolve({ url: tc.url, error: err.message });
    });
    req.end();
  });
}

async function run() {
  console.log('Testing live production redirects at https://isitkitchensafe.com...');
  let passed = 0;
  let total = testCases.length;

  for (const tc of testCases) {
    const res = await checkUrl(tc);
    if (res.error) {
      console.log(`❌ ERROR: ${res.url} - ${res.error}`);
      continue;
    }

    if (tc.expectedLocation) {
      const locMatch = res.location.endsWith(tc.expectedLocation) || res.location === tc.expectedLocation;
      if (res.status === 301 && locMatch) {
        console.log(`✅ [301 -> ${res.location}] ${res.url}`);
        passed++;
      } else {
        console.log(`⏳ [Status: ${res.status} | Loc: ${res.location}] ${res.url} (Expected 301 -> ${tc.expectedLocation})`);
      }
    } else if (tc.expectedStatus) {
      if (tc.expectedStatus.includes(res.status)) {
        console.log(`✅ [Status: ${res.status}] ${res.url}`);
        passed++;
      } else {
        console.log(`⏳ [Status: ${res.status}] ${res.url} (Expected ${tc.expectedStatus})`);
      }
    }
  }

  console.log(`\nResults: ${passed} / ${total} tests matched.`);
  return passed === total;
}

run();
