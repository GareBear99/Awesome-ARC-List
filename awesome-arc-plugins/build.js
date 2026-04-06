
const fs = require('fs');

const plugins = JSON.parse(fs.readFileSync('plugins.json', 'utf8'));
const featured = plugins.filter(p => p.category === 'Featured Stack');
const installable = plugins.filter(p => p.install_url);
const grouped = {};
for (const p of installable) {
  grouped[p.category] = grouped[p.category] || [];
  grouped[p.category].push(p);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Awesome ARC Plugins</title>
  <meta name="description" content="ARC-first Codex plugin registry featuring Gary Doman's deterministic operator stack and related ARC ecosystem installables." />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: #06070b; color: #e5e7eb; }
    .glass { background: rgba(255,255,255,0.04); backdrop-filter: blur(14px); }
    .border-accent { border-color: rgba(168,85,247,0.25); }
  </style>
</head>
<body class="min-h-screen">
  <div class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-10">
      <p class="uppercase tracking-[0.3em] text-xs text-purple-300 mb-4">Gary Doman • ARC ecosystem</p>
      <h1 class="text-5xl font-semibold mb-4">Awesome ARC Plugins</h1>
      <p class="text-zinc-300 max-w-4xl text-lg leading-8">A curated ARC-first plugin registry and landing page for the full deterministic operator stack: ARC Core, Lucid Terminal, LuciferAI_Local, Synth Shell, and the broader research/runtime surfaces around them.</p>
    </header>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Featured stack</h2>
      <div class="grid md:grid-cols-3 gap-4">
        ${featured.map(p => `
          <a href="${p.url}" class="glass border border-zinc-800 rounded-3xl p-6 block hover:border-accent transition">
            <div class="text-sm text-purple-300 mb-2">${p.category}</div>
            <div class="text-xl font-semibold mb-3">${p.name}</div>
            <p class="text-zinc-300 leading-7">${p.description}</p>
          </a>
        `).join('')}
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-6">Installable plugins</h2>
      ${Object.entries(grouped).map(([category, entries]) => `
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-purple-300 mb-4">${category}</h3>
          <div class="grid md:grid-cols-2 gap-4">
            ${entries.map(p => `
              <div class="glass border border-zinc-800 rounded-3xl p-6">
                <div class="text-sm text-purple-300 mb-2">Installable</div>
                <div class="text-xl font-semibold mb-3">${p.name}</div>
                <p class="text-zinc-300 leading-7 mb-4">${p.description}</p>
                <div class="flex gap-3 text-sm flex-wrap">
                  <a href="${p.url}" class="px-4 py-2 rounded-2xl bg-purple-600/20 border border-purple-400/30">Repository</a>
                  <a href="${p.install_url}" class="px-4 py-2 rounded-2xl bg-zinc-900 border border-zinc-700">Manifest</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>
  </div>
</body>
</html>`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Built dist/index.html');
