// Profiles Command

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');
const { formatProfilesTable } = require('../formatters/table');

function createProfilesCommand() {
  return new Command('profiles')
    .description('Get boosted/token profiles')
    .option('-c, --chain <chain>', 'Filter by chain (e.g., solana, ethereum, base)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const response = await client.getTokenProfiles(options.chain);
        
        if (options.format === 'table') {
          console.log(formatProfilesTable(response));
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching profiles:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createProfilesCommand };