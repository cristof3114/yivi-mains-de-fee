// Prépare une copie de dist/ navigable sans serveur (liens relatifs en .html).
// Usage : node scripts/preview.mjs  -> dossier preview/
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const src = 'dist', out = 'preview';
rmSync(out, { recursive: true, force: true });

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

for (const file of walk(src)) {
  const rel = relative(src, file);
  const dest = join(out, rel);
  mkdirSync(dirname(dest), { recursive: true });
  if (!rel.endsWith('.html')) { writeFileSync(dest, readFileSync(file)); continue; }
  const depth = rel.split('/').length - 1;
  const up = depth ? '../'.repeat(depth) : '';
  let html = readFileSync(file, 'utf8').replace(/(href|src)="\/(?!\/)([^"#?]*)"/g, (_, attr, path) => {
    if (path === '') return `${attr}="${up}index.html"`;
    if (posix.extname(path)) return `${attr}="${up}${path}"`;
    return `${attr}="${up}${path}.html"`;
  });
  writeFileSync(dest, html);
}
console.log('preview prêt');
