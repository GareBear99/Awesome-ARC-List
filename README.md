<p align="center">
  <br>
  <img width="80" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome">
  <br>
</p>

<h1 align="center">Awesome ARC Plugins</h1>

<p align="center">A curated ARC-first Codex plugin registry built around Gary Doman's deterministic operator stack.</p>

---

## What this is

This is a full ARC-branded version of the curated Codex plugin registry pattern.

Instead of a single umbrella entry, this package now includes **every major ARC setup surface as its own installable plugin** so your registry can feature the whole stack:

- ARC Operator Stack
- ARC Core
- Lucid Terminal
- LuciferAI_Local
- Synth Shell
- ARC Turbo OS
- Arc-RAR
- Proto-Synth Grid Engine
- Seeded Universe Recreation Engine

## Repo layout

```text
.
├── .agents/
│   └── plugins/
│       └── marketplace.json
├── build.js
├── dist/
│   └── index.html
├── plugins.json
└── plugins/
    └── GareBear99/
        ├── arc-operator-stack/
        ├── arc-core/
        ├── lucid-terminal/
        ├── luciferai-local/
        ├── synth-shell/
        ├── arc-turbo-os/
        ├── arc-rar/
        ├── proto-synth-grid-engine/
        └── seeded-universe-recreation-engine/
```

## Included installables

| Plugin | Purpose |
|---|---|
| ARC Operator Stack | Umbrella entrypoint for the full deterministic operator stack |
| ARC Core | Kernel authority, receipts, event schema, state tree, replay/rollback |
| Lucid Terminal | Operator surface, routing, debugger/validator UI |
| LuciferAI_Local | Local reasoning and proposal layer |
| Synth Shell | Visualization and embodiment surface |
| ARC Turbo OS | Seed-rooted runtime and jump-to-resolved-output research path |
| Arc-RAR | Portable packaging and archive transport concept |
| Proto-Synth Grid Engine | Synthetic grid / simulation / wetware communications concept |
| Seeded Universe Recreation Engine | Deterministic physics and replayable universe simulation concept |

## Build the landing page

```bash
node build.js
```

Then open `dist/index.html`.

## Next upgrades

- Replace placeholder text with your final public repo copy.
- Add logos, screenshots, and badges.
- Add GitHub Actions and issue templates if you want this to match the original repo more closely.
- Deploy `dist/` to GitHub Pages.
