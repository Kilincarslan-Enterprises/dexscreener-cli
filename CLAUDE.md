# DexScreener CLI for Claude Code

A comprehensive CLI for querying DexScreener token and market data.

## Quick Reference

```bash
# Install globally
npm install -g @kilincarslan/dexscreener-cli

# Most common commands
dexscreener search <token_symbol>           # Search tokens
dexscreener token <chain>_<address>       # Token details (price, mcap, liquidity)
dexscreener pools                         # Trending pools
dexscreener metas                         # Memecoin categories
dexscreener --help                        # Full command list
```

## Usage Patterns

### Research a token
```bash
dexscreener search SOL --format table
dexscreener token base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82
```

### Get market trends
```bash
dexscreener pools --format table          # Top pools
dexscreener metas                         # Trending categories
dexscreener profiles                      # Boosted tokens
```

### Trading data
```bash
dexscreener orders base_0x...            # Order book
dexscreener txs base_0x... --limit 20    # Transactions
```

## Output

- Default: JSON (great for scripts)
- `--format table`: Human-readable tables

## Chain Format

`chainId_tokenAddress` — e.g., `base_0x...`, `solana_...`, `ethereum_...`

## Full Documentation

See [SKILL.md](./SKILL.md) for complete AI agent integration guide.

## Repository

https://github.com/Kilincarslan-Enterprises/dexscreener-cli