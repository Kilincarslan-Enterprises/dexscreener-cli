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

  // =====================
  // EXISTING METHODS
  // =====================

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
    // API requires q parameter, use empty string to get all pairs
    return this.fetch(`/latest/dex/search?q=&limit=${limit}`);
  }

  // =====================
  // TOKEN PROFILES (BOOSTS)
  // =====================

  /** Get latest boosted token profiles */
  async getLatestTokenProfiles() {
    return this.fetch('/token-profiles/latest/v1');
  }

  /** Get top boosted token profiles (most active) */
  async getTopTokenProfiles() {
    return this.fetch('/token-boosts/top/v1');
  }

  // =====================
  // TOKEN PAIRS APIs
  // =====================

  /** Get token pairs by token address
   * @param {string} chainId
   * @param {string} tokenAddress
   */
  async getTokenPairsByToken(chainId, tokenAddress) {
    return this.fetch(`/token-pairs/v1/${chainId}/${tokenAddress}`);
  }

  /** Get token pairs by pair address
   * @param {string} chainId
   * @param {string} pairAddresses (comma-separated)
   */
  async getTokenPairsByPair(chainId, pairAddresses) {
    return this.fetch(`/token-pairs/v1/${chainId}/${pairAddresses}`);
  }

  // =====================
  // TOKEN ORDERS
  // =====================

  /** Get token orders (buy/sell orders)
   * @param {string} chainId
   * @param {string} tokenAddress
   */
  async getTokenOrders(chainId, tokenAddress) {
    return this.fetch(`/orders/v1/${chainId}/${tokenAddress}`);
  }

  // =====================
  // TRANSACTIONS
  // =====================

  /** Get latest transactions for a pair
   * @param {string} chainId
   * @param {string} pairAddress
   */
  async getPairTransactions(chainId, pairAddress) {
    return this.fetch(`/token-pairs/${chainId}/${pairAddress}/txs`);
  }

  /** Get transactions by timestamp
   * @param {string} chainId
   * @param {string} pairAddress
   * @param {number} timestamp (Unix timestamp in seconds)
   */
  async getPairTransactionsByTimestamp(chainId, pairAddress, timestamp) {
    return this.fetch(`/token-pairs/${chainId}/${pairAddress}/txs/${timestamp}`);
  }

  // =====================
  // COMMUNITY TAKEOVERS
  // =====================

  /** Get latest community takeovers */
  async getCommunityTakeovers() {
    return this.fetch('/community-takeovers/latest/v1');
  }

  // =====================
  // ADS
  // =====================

  /** Get latest ads */
  async getLatestAds() {
    return this.fetch('/ads/latest/v1');
  }

  // =====================
  // TRENDING METAS
  // =====================

  /** Get trending metas */
  async getTrendingMetas() {
    return this.fetch('/metas/trending/v1');
  }

  /** Get specific meta by slug
   * @param {string} slug (e.g., 'ai', 'dog')
   */
  async getMetaBySlug(slug) {
    return this.fetch(`/metas/meta/v1/${slug}`);
  }

  // =====================
  // RECENT UPDATES
  // =====================

  /** Get recently updated token profiles */
  async getRecentUpdates() {
    return this.fetch('/token-profiles/recent-updates/v1');
  }
}

const client = new DexScreenerClient();
module.exports = { client };