// Search Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatSearchTable } = require('../formatters/table');

function createSearchCommand() {
  return new Command('search')
    .description('Search tokens by symbol or address')
    .argument('<query>', 'Search query (token symbol or address)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (query, options) => {
      try {
        const response = await client.search(query);
        
        if (options.format === 'table') {
          console.log(formatSearchTable(response.pairs));
        } else {
          console.log(formatJson(response.pairs));
        }
      } catch (error) {
        console.error('Error searching tokens:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createSearchCommand };