// DexScreener API Client

const BASE_URL = 'https://api.dexscreener.com';

class DexScreenerClient {
  /** @param {string} endpoint */
  async fetch(endpoint) {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }

  /** @param {string} query */
  async search(query) {
    return this.fetch(`/latest/dex/search?q=${encodeURIComponent(query)}`);
  }

  /** @param {string} chainId
   * @param {string} tokenAddress
   */
  async getToken(chainId, tokenAddress) {
    return this.fetch(`/tokens/v1/${chainId}/${tokenAddress}`);
  }

  /** @param {string} chainId
   * @param {string} pairAddress
   */
  async getPair(chainId, pairAddress) {
    return this.fetch(`/latest/dex/pairs/${chainId}/${pairAddress}`);
  }

  /** @param {number} [limit=10] */
  async getLatestPools(limit = 10) {
    return this.fetch(`/latest/dex/search?limit=${limit}`);
  }

  /** @param {string} [chainId] */
  async getTokenProfiles(chainId) {
    const endpoint = chainId 
      ? `/token-boosts/latest/v1?chainId=${chainId}`
      : '/token-boosts/latest/v1';
    return this.fetch(endpoint);
  }
}

const client = new DexScreenerClient();
module.exports = { client };