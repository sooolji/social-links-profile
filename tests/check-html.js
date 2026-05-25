import { readFileSync, existsSync } from 'node:fs';

const htmlPath = new URL('../index.html', import.meta.url);

if (!existsSync(htmlPath)) {
  console.error('index.html was not found.');
  process.exit(1);
}

const html = readFileSync(htmlPath, 'utf8');

const requiredSnippets = [
  '<main class="page-shell">',
  '<article class="profile-card"',
  '<h1 id="profile-name"',
  '<nav aria-label="Social links">',
  '<link rel="stylesheet" href="./style.css">',
];

const missingSnippets = requiredSnippets.filter((snippet) => !html.includes(snippet));

if (missingSnippets.length > 0) {
  console.error('HTML validation failed. Missing:');
  for (const snippet of missingSnippets) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log('HTML validation passed.');