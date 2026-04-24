# DexScreener CLI

Query token data, pools, and market info from DexScreener API. Free, open-source, and AI-friendly.

[![npm version](https://badge.fury.io/js/@kilincarslan%2Fdexscreener-cli.svg)](https://www.npmjs.com/package/@kilincarslan/dexscreener-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
npm install -g @kilincarslan/dexscreener-cli
```

## Quick Start

```bash
# Search tokens
dexscreener search SOL

# Get token details (chain_address format)
dexscreener token base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82

# Trending pools
dexscreener pools --format table

# Memecoin categories
dexscreener metas
```

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `search <query>` | Search by symbol/address | `dexscreener search bitcoin` |
| `token <chain>_<addr>` | Token price, mcap, liquidity | `dexscreener token solana_...` |
| `pair <chain>_<addr>` | Pool/pair details | `dexscreener pair base_0x...` |
| `token-pairs <chain>_<addr>` | All pairs for token | `dexscreener token-pairs base_...` |
| `pools` | Trending pools | `dexscreener pools` |
| `profiles` | Boosted tokens | `dexscreener profiles --type top` |
| `recent-updates` | Updated profiles | `dexscreener recent-updates` |
| `takeovers` | Community takeovers | `dexscreener takeovers` |
| `ads` | Latest ads | `dexscreener ads` |
| `orders <chain>_<addr>` | Order book | `dexscreener orders base_0x...` |
| `txs <chain>_<pair>` | Transactions | `dexscreener txs base_0x...` |
| `metas` | Memecoin trends | `dexscreener metas` |
| `meta <slug>` | Category details | `dexscreener meta ai` |

## Output

- **JSON** (default) — for scripts and AI agents
- **Table** — human-readable (`--format table` or `-f table`)

## Chains

`solana`, `ethereum`, `base`, `bsc`, `arbitrum`, `polygon`, `avalanche`, `optimism`, `fantom`, `sui`, `aptos`, and more.

**Format:** `chainId_tokenAddress` — e.g., `base_0x...`, `solana_...`

## API Coverage

All 13 DexScreener public endpoints:

- Search, Token, Pair, Token-Pairs, Pools
- Profiles (latest/top), Recent Updates
- Community Takeovers, Ads
- Orders, Transactions
- Metas (trending), Meta (by slug)

Rate limit: 60 req/min (no API key needed)

## For AI Agents

Install as skill in OpenClaw/Claude Code:

```bash
# Returns structured JSON for parsing
dexscreener search SOL | jq '.[0].priceUsd'
```

See [SKILL.md](./SKILL.md) for full integration guide.

## License

MIT © Kilincarslan Enterprises — Free for everyone to use, modify, and distribute.

[GitHub](https://github.com/Kilincarslan-Enterprises/dexscreener-cli) | [Issues](https://github.com/Kilincarslan-Enterprises/dexscreener-cli/issues)