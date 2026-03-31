# 🐾 TOMODACHI Companion for OpenClaw

[![OpenClaw](https://img.shields.io/badge/OpenClaw-Compatible-red)](https://github.com/marco77x)
![Node](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-2563eb)
![Status](https://img.shields.io/badge/status-active-16a34a)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

A Tamagotchi-style virtual companion system for OpenClaw, with 18 unique companion forms, evolution, needs, mood-based dialogue, and ASCII animations.

## ✨ Features

- 18 companion forms across 3 evolution lines
- Stat-based growth and decay system
- Companion mood + dialogue behavior
- Evolution after interaction milestones
- CLI wrapper for quick actions
- Local JSON persistence per user

## 📁 Project Structure

```
.
├── .github/workflows/build-test.yml
├── src/
│   ├── companion.js
│   ├── companion.sh
│   ├── companion-cli.js
│   ├── species.js
│   ├── animations.js
│   └── ascii-art.js
├── SKILL.md
├── package.json
├── tsconfig.json
├── .gitignore
├── LICENSE
└── install.sh
```

## 🚀 Quick Start

```bash
./src/companion.sh hatch <user>
./src/companion.sh status <user>
./src/companion.sh talk <user>
./src/companion.sh feed <user>
./src/companion.sh play <user>
```

## 🧩 Install into OpenClaw

```bash
bash ./install.sh
```

## 📝 Notes

- The original default baby "Mochi" has been renamed to **TOMODACHI** as requested.
- Data is saved under `~/.openclaw/scripts/companion/data/`.

## 📜 License

MIT
