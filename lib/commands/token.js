// Token Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatTokenTable } = require('../formatters/table');

function createTokenCommand() {
  return new Command('token')
    .description('Get token details by chain and address')
    .argument('<chain_address>', 'Chain and token address (e.g., base_0x...)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (chainAddress, options) => {
      try {
        const [chainId, tokenAddress] = chainAddress.split('_');
        
        if (!chainId || !tokenAddress) {
          console.error('Error: Invalid format. Use: chain_address (e.g., base_0x...)');
          process.exit(1);
        }
        
        const response = await client.getToken(chainId, tokenAddress);
        
        if (options.format === 'table') {
          console.log(formatTokenTable(response.pairs));
        } else {
          console.log(formatJson(response.pairs));
        }
      } catch (error) {
        console.error('Error fetching token:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createTokenCommand };