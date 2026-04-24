// Table Output Formatter

const Table = require('cli-table3');

/** @param {number} num */
function formatNumber(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toFixed(2);
}

/** @param {import('../types/dexscreener').Pair[]} pairs */
function formatSearchTable(pairs) {
  const table = new Table({
    head: ['Symbol', 'Chain', 'Pair Address', 'Price USD', '24h Change', '24h Vol', 'Liquidity'],
    colWidths: [10, 10, 20, 12, 12, 12, 12]
  });

  for (const pair of pairs) {
    table.push([
      pair.baseToken.symbol,
      pair.chainId,
      pair.pairAddress.slice(0, 10) + '...',
      pair.priceUsd || pair.priceNative,
      pair.priceChange?.h24 ? `${pair.priceChange.h24.toFixed(2)}%` : '-',
      pair.volume?.h24 ? `$${formatNumber(pair.volume.h24)}` : '-',
      pair.liquidity?.usd ? `$${formatNumber(pair.liquidity.usd)}` : '-'
    ]);
  }

  return table.toString();
}

/** @param {import('../types/dexscreener').Pair[]} pairs */
function formatTokenTable(pairs) {
  const table = new Table({
    head: ['Symbol', 'DEX', 'Price USD', 'Market Cap', 'Liquidity', '24h Vol'],
    colWidths: [10, 12, 12, 14, 12, 12]
  });

  for (const pair of pairs) {
    table.push([
      pair.baseToken.symbol,
      pair.dexId,
      pair.priceUsd || pair.priceNative,
      pair.marketCap ? `$${formatNumber(pair.marketCap)}` : '-',
      pair.liquidity?.usd ? `$${formatNumber(pair.liquidity.usd)}` : '-',
      pair.volume?.h24 ? `$${formatNumber(pair.volume.h24)}` : '-'
    ]);
  }

  return table.toString();
}

/** @param {import('../types/dexscreener').Pair} pair */
function formatPairTable(pair) {
  const table = new Table({
    head: ['Field', 'Value'],
    colWidths: [20, 50]
  });

  table.push(
    ['Base Token', `${pair.baseToken.name} (${pair.baseToken.symbol})`],
    ['Quote Token', `${pair.quoteToken.name} (${pair.quoteToken.symbol})`],
    ['DEX', pair.dexId],
    ['Chain', pair.chainId],
    ['Pair Address', pair.pairAddress],
    ['Price (Native)', pair.priceNative],
    ['Price (USD)', pair.priceUsd || '-'],
    ['Market Cap', pair.marketCap ? `$${formatNumber(pair.marketCap)}` : '-'],
    ['FDV', pair.fdv ? `$${formatNumber(pair.fdv)}` : '-'],
    ['Liquidity (USD)', pair.liquidity?.usd ? `$${formatNumber(pair.liquidity.usd)}` : '-'],
    ['24h Volume', pair.volume?.h24 ? `$${formatNumber(pair.volume.h24)}` : '-'],
    ['24h Price Change', pair.priceChange?.h24 ? `${pair.priceChange.h24.toFixed(2)}%` : '-'],
    ['URL', pair.url]
  );

  return table.toString();
}

/** @param {import('../types/dexscreener').Pair[]} pairs */
function formatPoolsTable(pairs) {
  const table = new Table({
    head: ['Symbol', 'Chain', 'DEX', 'Price USD', '24h Vol', 'Liquidity'],
    colWidths: [10, 10, 10, 12, 12, 12]
  });

  for (const pair of pairs) {
    table.push([
      pair.baseToken.symbol,
      pair.chainId,
      pair.dexId,
      pair.priceUsd || pair.priceNative,
      pair.volume?.h24 ? `$${formatNumber(pair.volume.h24)}` : '-',
      pair.liquidity?.usd ? `$${formatNumber(pair.liquidity.usd)}` : '-'
    ]);
  }

  return table.toString();
}

/** @param {import('../types/dexscreener').TokenProfile[]} profiles */
function formatProfilesTable(profiles) {
  const table = new Table({
    head: ['Token Address', 'Chain', 'Description', 'Boost Amount'],
    colWidths: [20, 10, 40, 15]
  });

  for (const profile of profiles) {
    const desc = profile.description || '-';
    table.push([
      profile.tokenAddress.slice(0, 10) + '...',
      profile.chainId,
      desc.slice(0, 40) + (desc.length > 40 ? '...' : ''),
      profile.amount ? `$${formatNumber(profile.amount)}` : '-'
    ]);
  }

  return table.toString();
}

module.exports = {
  formatSearchTable,
  formatTokenTable,
  formatPairTable,
  formatPoolsTable,
  formatProfilesTable
};