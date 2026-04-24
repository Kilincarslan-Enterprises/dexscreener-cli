// Takeovers Command - Community Takeovers

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createTakeoversCommand() {
  return new Command('takeovers')
    .description('Get latest token community takeovers')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const response = await client.getCommunityTakeovers();
        
        if (options.format === 'table' && response.takeovers) {
          // Simple table for takeovers
          const Table = require('cli-table3');
          const table = new Table({
            head: ['Token Address', 'Chain', 'New Owner', 'Timestamp'],
            colWidths: [20, 10, 20, 20]
          });
          
          for (const takeover of response.takeovers) {
            table.push([
              (takeover.tokenAddress || '').slice(0, 18) + '...',
              takeover.chainId || '-',
              (takeover.newOwner || '').slice(0, 18) + '...',
              takeover.timestamp ? new Date(takeover.timestamp * 1000).toISOString() : '-'
            ]);
          }
          console.log(table.toString());
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching takeovers:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createTakeoversCommand };