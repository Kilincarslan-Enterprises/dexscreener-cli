// Pools Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatPoolsTable } = require('../formatters/table');

function createPoolsCommand() {
  return new Command('pools')
    .description('Get latest pools')
    .option('-l, --limit <number>', 'Number of pools to fetch', '10')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const limit = parseInt(options.limit, 10);
        const response = await client.getLatestPools(limit);
        
        if (options.format === 'table') {
          console.log(formatPoolsTable(response.pairs));
        } else {
          console.log(formatJson(response.pairs));
        }
      } catch (error) {
        console.error('Error fetching pools:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createPoolsCommand };