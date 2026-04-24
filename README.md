# DexScreener CLI

A command-line interface for querying token data from the DexScreener API.

## Installation

```bash
# Clone the repository
git clone https://github.com/Kilincarslan-Enterprises/dexscreener-cli.git
cd dexscreener-cli

# Install dependencies
npm install

# Link the CLI globally
npm link
```

## Usage

### Search for tokens
```bash
dexscreener search <query>
dexscreener search SOL
dexscreener search "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82"
```

### Get token details
```bash
dexscreener token <chain>_<address>
dexscreener token base_0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82
dexscreener token solana_EpN7X2Kqcz5GdjECgqccvGhzuryLARKDqrkV6Ghpump
```

### Get pair/pool details
```bash
dexscreener pair <chain>_<pairAddress>
dexscreener pair base_0xb30540172F1B37d1eE1d109e49F883E935E69219
```

### Get latest pools
```bash
dexscreener pools
dexscreener pools --limit 20
```

### Get boosted token profiles
```bash
dexscreener profiles
dexscreener profiles --chain solana
```

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