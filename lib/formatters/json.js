// JSON Output Formatter

/** @param {unknown} data */
function formatJson(data) {
  return JSON.stringify(data, null, 2);
}

/** @param {import('./types/dexscreener').Pair[]} pairs */
function formatSearchJson(pairs) {
  return formatJson(pairs);
}

/** @param {import('./types/dexscreener').Pair[]} pairs */
function formatTokenJson(pairs) {
  return formatJson(pairs);
}

/** @param {import('./types/dexscreener').Pair} pair */
function formatPairJson(pair) {
  return formatJson(pair);
}

/** @param {import('./types/dexscreener').Pair[]} pairs */
function formatPoolsJson(pairs) {
  return formatJson(pairs);
}

/** @param {import('./types/dexscreener').TokenProfile[]} profiles */
function formatProfilesJson(profiles) {
  return formatJson(profiles);
}

module.exports = {
  formatJson,
  formatSearchJson,
  formatTokenJson,
  formatPairJson,
  formatPoolsJson,
  formatProfilesJson
};