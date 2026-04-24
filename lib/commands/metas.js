// Metas Command - Trending Metas

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createMetasCommand() {
  return new Command('metas')
    .description('Get trending metas (memecoin categories)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (options) => {
      try {
        const response = await client.getTrendingMetas();
        
        const metas = Array.isArray(response) ? response : (response.metas || []);
        if (options.format === 'table' && metas.length > 0) {
          const Table = require('cli-table3');
          const table = new Table({
            head: ['Slug', 'Name', 'Market Cap', 'Token Count'],
            colWidths: [20, 22, 15, 12]
          });
          
          for (const meta of metas) {
            table.push([
              meta.slug || '-',
              meta.name || '-',
              `$${meta.marketCap?.toLocaleString() || '-'}`,
              meta.tokenCount || '-'
            ]);
          }
          console.log(table.toString());
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching metas:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createMetasCommand };