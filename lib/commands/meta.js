// Meta Command - Get Specific Meta by Slug

const { Command } = require('commander');
const { client } = require('../api/client');
const { formatJson } = require('../formatters/json');

function createMetaCommand() {
  return new Command('meta')
    .description('Get specific meta by slug (e.g., ai, dog)')
    .argument('<slug>', 'Meta slug (e.g., ai, dog,名人)')
    .option('-f, --format <format>', 'Output format (json|table)', 'json')
    .action(async (slug, options) => {
      try {
        const response = await client.getMetaBySlug(slug);
        
        if (options.format === 'table' && response.meta) {
          const Table = require('cli-table3');
          const table = new Table({
            head: ['Field', 'Value'],
            colWidths: [20, 50]
          });
          
          const meta = response.meta;
          table.push(
            ['Slug', meta.slug || '-'],
            ['Name', meta.name || '-'],
            ['Description', meta.description || '-'],
            ['Image URL', meta.imageUrl || '-']
          );
          
          // Add pairs if available
          if (meta.pairs && meta.pairs.length > 0) {
            const pairsTable = new Table({
              head: ['Symbol', 'Chain', 'Price USD', '24h Change'],
              colWidths: [10, 10, 12, 12]
            });
            
            for (const pair of meta.pairs) {
              pairsTable.push([
                pair.baseToken?.symbol || '-',
                pair.chainId || '-',
                pair.priceUsd || '-',
                pair.priceChange?.h24 ? `${pair.priceChange.h24.toFixed(2)}%` : '-'
              ]);
            }
            
            console.log(table.toString());
            console.log('\nTop Pairs:');
            console.log(pairsTable.toString());
          } else {
            console.log(table.toString());
          }
        } else {
          console.log(formatJson(response));
        }
      } catch (error) {
        console.error('Error fetching meta:', error.message);
        process.exit(1);
      }
    });
}

module.exports = { createMetaCommand };