// Ads Command - Latest Ads/Promotions

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createAdsCommand() {
  return new Command('ads')
    .description('Get latest ads and promotions')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const response = await client.getLatestAds();
        
        if (options.format === 'table' && response.ads) {
          const Table = require('cli-table3');
          const table = new Table({
            head: ['Token', 'Chain', 'Position', 'Start Time', 'End Time'],
            colWidths: [20, 10, 10, 20, 20]
          });
          
          for (const ad of response.ads) {
            table.push([
              (ad.tokenAddress || ad.tokenSymbol || '-').slice(0, 18),
              ad.chainId || '-',
              ad.position || '-',
              ad.startTime ? new Date(ad.startTime * 1000).toISOString() : '-',
              ad.endTime ? new Date(ad.endTime * 1000).toISOString() : '-'
            ]);
          }
          console.log(table.toString());
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching ads:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createAdsCommand };