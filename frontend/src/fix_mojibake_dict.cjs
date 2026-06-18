const fs = require('fs');
const path = require('path');

const replacements = {
  'â€”': '—',
  'âœ…': '✅',
  'ðŸ—ºï¸ ': '🗺️',
  'â‡„': '⇄',
  'Ã—': '×',
  'â†’': '→',
  'â”€': '─',
  'â€¦': '…',
  'ðŸ§ ': '🧠',
  'âš¡': '⚡',
  'âš ï¸ ': '⚠️',
  'âš”ï¸ ': '⚔️',
  'âš–ï¸ ': '⚖️',
  'ðŸ§ ': '🧠',
  'ðŸ‘¤': '👤',
  'ðŸ” ': '🔍'
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const [bad, good] of Object.entries(replacements)) {
        if (content.includes(bad)) {
          content = content.split(bad).join(good);
          changed = true;
        }
      }
      
      if (changed) {
        console.log('Fixed symbols in', fullPath);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(__dirname);
