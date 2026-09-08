const fs = require('fs');
const crypto = require('crypto');
['src/data/items.es.json.bak-pre-batch4', 'src/data/items.pt.json.bak-pre-batch4'].forEach(f => {
  const data = fs.readFileSync(f);
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  console.log(hash + '  ' + f);
});
