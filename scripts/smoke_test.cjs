const https = require('https');

const urls = [
  'https://isitkitchensafe.com/microwave/styrofoam',
  'https://isitkitchensafe.com/dishwasher/cast-iron-skillet',
  'https://isitkitchensafe.com/freezer/raw-chicken',
  'https://isitkitchensafe.com/oven/parchment-paper',
  'https://isitkitchensafe.com/dryer/crocs',
  'https://isitkitchensafe.com/material',
  'https://isitkitchensafe.com/compare',
  'https://isitkitchensafe.com/how-long',
  'https://isitkitchensafe.com/blog',
  'https://isitkitchensafe.com/sitemap.xml'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(`${res.statusCode} ${url}`);
    }).on('error', (e) => {
      resolve(`ERROR ${url} - ${e.message}`);
    });
  });
}

async function run() {
  for (const url of urls) {
    console.log(await checkUrl(url));
  }
}

run();
