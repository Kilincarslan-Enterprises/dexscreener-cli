// Pair Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatPairTable } = require('../formatters/table');

function createPairCommand() {
  return new Command('pair')
    .description('Get pair/pool details by chain and pair address')
    .argument('<chain_address>', 'Chain and pair address (e.g., base_0x...)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (chainAddress, options) => {
      try {
        const [chainId, pairAddress] = chainAddress.split('_');
        
        if (!chainId || !pairAddress) {
          console.error('Error: Invalid format. Use: chain_address (e.g., base_0x...)');
          process.exit(1);
        }
        
        const response = await client.getPair(chainId, pairAddress);
        
        if (options.format === 'table') {
          console.log(formatPairTable(response.pair));
        } else {
          console.log(formatJson(response.pair));
        }
      } catch (error) {
        console.error('Error fetching pair:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createPairCommand };