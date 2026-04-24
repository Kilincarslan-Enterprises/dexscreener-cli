// DexScreener API Types

/** @typedef {Object} Token
 * @property {string} address
 * @property {string} name
 * @property {string} symbol
 */

/** @typedef {Object} Txns
 * @property {Object} m5
 * @property {number} m5.buys
 * @property {number} m5.sells
 * @property {Object} h1
 * @property {number} h1.buys
 * @property {number} h1.sells
 * @property {Object} h6
 * @property {number} h6.buys
 * @property {number} h6.sells
 * @property {Object} h24
 * @property {number} h24.buys
 * @property {number} h24.sells
 */

/** @typedef {Object} Volume
 * @property {number} h24
 * @property {number} h6
 * @property {number} h1
 * @property {number} m5
 */

/** @typedef {Object} PriceChange
 * @property {number} [m5]
 * @property {number} [h1]
 * @property {number} [h6]
 * @property {number} [h24]
 */

/** @typedef {Object} Liquidity
 * @property {number} [usd]
 * @property {number} base
 * @property {number} quote
 */

/** @typedef {Object} Pair
 * @property {string} chainId
 * @property {string} dexId
 * @property {string} url
 * @property {string} pairAddress
 * @property {Token} baseToken
 * @property {Token} quoteToken
 * @property {string} priceNative
 * @property {string} [priceUsd]
 * @property {Txns} [txns]
 * @property {Volume} [volume]
 * @property {PriceChange} [priceChange]
 * @property {Liquidity} [liquidity]
 * @property {number} [fdv]
 * @property {number} [marketCap]
 */

/** @typedef {Object} TokenProfile
 * @property {string} url
 * @property {string} chainId
 * @property {string} tokenAddress
 * @property {string} icon
 * @property {string} [header]
 * @property {string} [description]
 * @property {Array<{type?: string, label?: string, url: string}>} [links]
 * @property {number} [totalAmount]
 * @property {number} [amount]
 */

/**
 * @typedef {'json' | 'table'} OutputFormat
 */

module.exports = {};