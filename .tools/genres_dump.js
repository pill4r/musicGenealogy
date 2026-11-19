const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = 'C:/Users/pillar/Documents/deepseek-harness/default-workspace/music-genealogy';
const ctx = { window: {} };
vm.createContext(ctx);
for (let i = 1; i <= 10; i++) {
  const f = path.join(ROOT, 'js', 'data-' + i + '.js');
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
}
const MG = ctx.window.MG;
const famMap = {};
MG.families.forEach((f) => { famMap[f.id] = f; });

const out = MG.families.map((f) => ({ id: f.id, name: f.name, sub: f.sub, color: f.color, genres: [] }));
const idx = {};
out.forEach((o) => { idx[o.id] = o; });
for (const g of MG.genres) {
  idx[g.f].genres.push({
    id: g.id,
    n: g.n,
    zh: g.zh,
    tier: g.tier,
    y: g.y,
    d: g.d,
    ar: g.ar,
    tr: g.tr
  });
}

const dir = path.join(ROOT, '.tools', 'playlists');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'genres.json'), JSON.stringify(out, null, 1), 'utf8');
console.log('families:', out.length, 'genres:', MG.genres.length);
out.forEach((o) => console.log(o.id, o.name, o.genres.length));
