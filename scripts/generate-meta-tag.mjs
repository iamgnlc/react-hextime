import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));

writeFileSync(
  path.join(root, 'public', 'meta.json'),
  JSON.stringify({ version: pkg.version }),
  'utf8',
);

console.log(`meta.json file has been saved with v${pkg.version}`);
