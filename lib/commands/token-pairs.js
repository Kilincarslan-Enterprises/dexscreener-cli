// Token Pairs by Token Address Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatSearchTable } = require('../formatters/table');

function createTokenPairsCommand() {
  return new Command('token-pairs')
    .description('Get token pairs by token address')
    .argument('<chain_address>', 'Chain and token address (e.g., base_0x...)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (chainAddress, options) => {
      try {
        const [chainId, tokenAddress] = chainAddress.split('_');
        
        if (!chainId || !tokenAddress) {
          console.error('Error: Invalid format. Use: chain_address (e.g., base_0x...)');
          process.exit(1);
        }
        
        const response = await client.getTokenPairsByToken(chainId, tokenAddress);
        
        // API returns array directly for this endpoint
        const pairs = Array.isArray(response) ? response : response.pairs;
        
        if (options.format === 'table') {
          console.log(formatSearchTable(pairs));
        } else {
          console.log(formatJson(pairs));
        }
      } catch (error) {
        console.error('Error fetching token pairs:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createTokenPairsCommand };