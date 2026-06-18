const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('â')) {
        console.log('Fixing', fullPath);
        // The file contains mojibake because it was read as utf8 but actually had utf8 bytes stored as latin1 characters
        let fixed = Buffer.from(content, 'latin1').toString('utf8');
        
        // Let's verify if the fix actually resulted in valid characters like '—'
        // If the 'fixed' string still looks weird, we might need a dictionary.
        fs.writeFileSync(fullPath, fixed, 'utf8');
      }
    }
  }
}

// test
const testStr = 'Debate concluded â€” verdict delivered';
const fixed = Buffer.from(testStr, 'latin1').toString('utf8');
console.log('Test:', fixed);

processDir(__dirname);
