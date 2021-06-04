const path = require('path')

// file name
console.log('basename:', path.basename(__filename));

// dir name
console.log('dirname:', path.dirname(__filename));

// extension
console.log('extname:', path.extname(__filename));

// join
console.log('join:', path.join(__dirname, 'public', 'index.html'));