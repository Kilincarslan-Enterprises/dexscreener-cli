// Profiles Command - Handles both latest and top token profiles

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createProfilesCommand() {
  const profileCmd = new Command('profiles')
    .description('Get boosted token profiles (latest or top)')
    .option('-t, --type <type>', 'Profile type (latest|top)', 'latest')
    .option('-f, --format <format>', 'Output format (json|table)', 'json');

  profileCmd.option('-c, --chain <chain>', 'Filter by chain (e.g., solana, ethereum, base)');

  profileCmd.action(async (options) => {
    try {
      let response;
      if (options.type === 'top') {
        response = await client.getTopTokenProfiles();
      } else {
        response = await client.getLatestTokenProfiles();
      }
      
      console.log(formatJson(response));
    } catch (error) {
      console.error('Error fetching profiles:', error.message);
      process.exit(1);
    }
  });

  return profileCmd;
}

module.exports = { createProfilesCommand };