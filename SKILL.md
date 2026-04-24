---
name: dexscreener-cli
description: Query DexScreener API data via CLI for token research, trading analysis, and market discovery. Use when needing token prices, liquidity, market cap, trending pools, memecoin categories (metas), community takeovers, or transaction data from DexScreener. Provides all 13 public API endpoints as CLI commands with JSON output for programmatic use.
---

# DexScreener CLI Skill

Query comprehensive token and market data from DexScreener API via command-line interface. Designed for AI agents performing trading research, market analysis, and token discovery.

## When to Use This Skill

Use dexscreener-cli when you need to:
- Research token prices, market cap, and liquidity
- Find trending pools and new token launches
- Analyze trading volume and transaction activity
- Discover memecoin categories (metas) and trends
- Monitor community takeovers and token promotions
- Get order book data for trading decisions

## Installation

```bash
# Global install
npm install -g @kilincarslan/dexscreener-cli

# Verify installation
dexscreener --version
```

## Core Commands

### Token Research
```bash
# Search by symbol or contract address
dexscreener search "SOL"
dexscreener search "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82"

# Get detailed token info
dexscreener token base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82
dexscreener token solana_So11111111111111111111111111111111111111112

# Get all trading pairs for a token
dexscreener token-pairs base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82
```

### Pool & Pair Data
```bash
# Get specific pair details
dexscreener pair base_0xb30540172F1B37d1eE1d109e49F883E935E69219

# Get trending pools (popular tokens)
dexscreener pools
dexscreener pools --format table
```

### Market Discovery
```bash
# Boosted tokens (promoted/latest)
dexscreener profiles
dexscreener profiles --type top

# Recently updated profiles
dexscreener recent-updates

# Community takeovers
dexscreener takeovers

# Ads and promotions
dexscreener ads
```

### Trading Data
```bash
# Order book for a token
dexscreener orders base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82

# Transaction history for a pair
dexscreener txs base_0xb30540172F1B37d1eE1d109e49F883E935E69219
dexscreener txs base_0x... --limit 50
```

### Memecoin Categories (Metas)
```bash
# Trending categories
dexscreener metas
dexscreener metas --format table

# Specific category details
dexscreener meta ai
dexscreener meta dog
dexscreener meta gaming
```

## Output Formats

**JSON (default for programmatic use):**
```bash
dexscreener search SOL
# Returns: [{"chainId": "base", "dexId": "aerodrome", "priceUsd": "85.45", ...}]
```

**Table (human-readable):**
```bash
dexscreener search SOL --format table
dexscreener pools -f table
```

## Chain Identifiers

Common chains: `solana`, `ethereum`, `base`, `bsc`, `arbitrum`, `polygon`, `avalanche`, `optimism`, `fantom`, `sui`, `aptos`

Chain format: always lowercase, e.g., `base`, `solana`, `ethereum`

## API Rate Limits

- 60 requests per minute for most endpoints
- CLI handles rate limiting gracefully
- No API key required

## Error Handling

Commands return exit code 0 on success, non-zero on failure. JSON output includes error details when applicable.

## Full API Coverage

| Endpoint | CLI Command |
|----------|-------------|
| GET /latest/dex/search | `search` |
| GET /tokens/v1/{chain}/{token} | `token` |
| GET /latest/dex/pairs/{chain}/{pair} | `pair` |
| GET /token-pairs/v1/{chain}/{token} | `token-pairs`, `pools` |
| GET /token-profiles/latest/v1 | `profiles` |
| GET /token-profiles/recent-updates/v1 | `recent-updates` |
| GET /community-takeovers/latest/v1 | `takeovers` |
| GET /ads/latest/v1 | `ads` |
| GET /orders/v1/{chain}/{token} | `orders` |
| GET /token-pairs/{chain}/{pair}/txs | `txs` |
| GET /metas/trending/v1 | `metas` |
| GET /metas/meta/v1/{slug} | `meta` |

## Examples for AI Agents

### Extract token price
```bash
dexscreener token base_0x... | jq '.priceUsd'
```

### Find highest volume pool
```bash
dexscreener pools | jq 'max_by(.volume.h24) | {pair: .baseToken.symbol, volume: .volume.h24}'
```

### Get all trending memecoin categories
```bash
dexscreener metas | jq '.[].name'
```

### Monitor specific token transactions
```bash
dexscreener txs base_0x... | jq '.[] | {type: .txType, amount: .tokenAmount, time: .timestamp}'
```

## Repository

https://github.com/Kilincarslan-Enterprises/dexscreener-cli

## Maintainer

Kilincarslan Enterprises Technology Department