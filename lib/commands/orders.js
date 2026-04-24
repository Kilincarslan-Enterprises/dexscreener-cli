// Token Orders Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createOrdersCommand() {
  return new Command('orders')
    .description('Get token buy/sell orders')
    .argument('<chain_address>', 'Chain and token address (e.g., base_0x...)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (chainAddress, options) => {
      try {
        const [chainId, tokenAddress] = chainAddress.split('_');
        
        if (!chainId || !tokenAddress) {
          console.error('Error: Invalid format. Use: chain_address (e.g., base_0x...)');
          process.exit(1);
        }
        
        const response = await client.getTokenOrders(chainId, tokenAddress);
        
        console.log(formatJson(response));
      } catch (error) {
        console.error('Error fetching orders:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createOrdersCommand };