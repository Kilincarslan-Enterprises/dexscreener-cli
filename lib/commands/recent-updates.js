// Recent Updates Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatProfilesTable } = require('../formatters/table');

function createRecentUpdatesCommand() {
  return new Command('recent-updates')
    .description('Get recently updated token profiles')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const response = await client.getRecentUpdates();
        
        if (options.format === 'table' && response.profiles) {
          console.log(formatProfilesTable(response.profiles));
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching recent updates:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createRecentUpdatesCommand };