// Transactions Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createTransactionsCommand() {
  return new Command('txs')
    .description('Get pair transactions')
    .argument('<chain_address>', 'Chain and pair address (e.g., base_0x...)')
    .option('-t, --timestamp <timestamp>', 'Get transactions after this Unix timestamp (seconds)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (chainAddress, options) => {
      try {
        const [chainId, pairAddress] = chainAddress.split('_');
        
        if (!chainId || !pairAddress) {
          console.error('Error: Invalid format. Use: chain_address (e.g., base_0x...)');
          process.exit(1);
        }
        
        let response;
        if (options.timestamp) {
          response = await client.getPairTransactionsByTimestamp(chainId, pairAddress, parseInt(options.timestamp, 10));
        } else {
          response = await client.getPairTransactions(chainId, pairAddress);
        }
        
        console.log(formatJson(response));
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createTransactionsCommand };