# DexScreener CLI

A comprehensive command-line interface for querying token data, pools, and market information from the DexScreener API. Built by Kilincarslan Enterprises for AI agents and traders.

## Installation

### Global Install (Recommended)
```bash
npm install -g @kilincarslan/dexscreener-cli
```

### Local Development
```bash
git clone https://github.com/Kilincarslan-Enterprises/dexscreener-cli.git
cd dexscreener-cli
npm install
npm link
```

## Quick Start

```bash
# Search for a token
dexscreener search SOL

# Get token details
dexscreener token base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82

# View trending pools
dexscreener pools --format table

# Check memecoin trends
dexscreener metas
```

## Commands Reference

### Token & Pair Data
| Command | Description | Example |
|---------|-------------|---------|
| `search <query>` | Search tokens by symbol or address | `dexscreener search bitcoin` |
| `token <chain>_<address>` | Get token details (price, mcap, liquidity) | `dexscreener token base_0x...` |
| `pair <chain>_<address>` | Get specific pair/pool details | `dexscreener pair base_0x...` |
| `token-pairs <chain>_<address>` | Get all pairs for a token | `dexscreener token-pairs solana_...` |

### Market Discovery
| Command | Description | Example |
|---------|-------------|---------|
| `pools` | Get latest trending pools | `dexscreener pools --limit 20` |
| `profiles` | Get boosted token profiles | `dexscreener profiles --type top` |
| `recent-updates` | Recently updated token profiles | `dexscreener recent-updates` |
| `takeovers` | Latest community takeovers | `dexscreener takeovers` |
| `ads` | Latest ads and promotions | `dexscreener ads` |

### Trading & Transactions
| Command | Description | Example |
|---------|-------------|---------|
| `orders <chain>_<address>` | Get buy/sell orders for token | `dexscreener orders base_0x...` |
| `txs <chain>_<pair>` | Get pair transaction history | `dexscreener txs base_0x...` |

### Memecoin Categories (Metas)
| Command | Description | Example |
|---------|-------------|---------|
| `metas` | Trending memecoin categories | `dexscreener metas` |
| `meta <slug>` | Specific category details | `dexscreener meta ai` |

## Output Formats

**JSON (default):**
```bash
dexscreener search SOL
```

**Table (human-readable):**
```bash
dexscreener search SOL --format table
dexscreener pools -f table
```

## Supported Chains

`solana`, `ethereum`, `base`, `bsc`, `arbitrum`, `polygon`, `avalanche`, `optimism`, `fantom`, `cronos`, `linea`, `mantle`, `mode`, `blast`, `pulsechain`, `sui`, `aptos`

## API Coverage

This CLI implements **all 13 public DexScreener API endpoints**:

1. ✅ GET /latest/dex/search — `search`
2. ✅ GET /tokens/v1/{chainId}/{tokenAddresses} — `token`
3. ✅ GET /latest/dex/pairs/{chainId}/{pairId} — `pair`
4. ✅ GET /token-pairs/v1/{chainId}/{tokenAddress} — `token-pairs`
5. ✅ GET /token-profiles/latest/v1 — `profiles`
6. ✅ GET /token-profiles/recent-updates/v1 — `recent-updates`
7. ✅ GET /community-takeovers/latest/v1 — `takeovers`
8. ✅ GET /ads/latest/v1 — `ads`
9. ✅ GET /orders/v1/{chainId}/{tokenAddress} — `orders`
10. ✅ GET /token-pairs/{chainId}/{pairAddress}/txs — `txs`
11. ✅ GET /metas/trending/v1 — `metas`
12. ✅ GET /metas/meta/v1/{slug} — `meta`
13. ✅ Pool aggregation via pairs API — `pools`

## Environment Variables

```bash
# Optional: Set default output format
export DEXSCREENER_FORMAT=json

# Optional: API rate limit handling (60 req/min)
```

## For AI Agents

This CLI is designed for programmatic use by AI agents. All commands return structured JSON suitable for automated parsing and decision-making. See [SKILL.md](./SKILL.md) for AI agent integration guide.

## Output Formats

### JSON (Default)
```bash
dexscreener search SOL --format json
```

### Table
```bash
dexscreener search SOL --format table
```

## Supported Chains

- solana
- ethereum
- base
- bsc (Binance Smart Chain)
- arbitrum
- polygon
- avalanche
- And more...

## License

MIT - Kilincarslan Enterprises