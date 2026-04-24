// CLI Entry Point

const { Command } = require('commander');
const { createSearchCommand } = require('./commands/search');
const { createTokenCommand } = require('./commands/token');
const { createPairCommand } = require('./commands/pair');
const { createPoolsCommand } = require('./commands/pools');
const { createProfilesCommand } = require('./commands/profiles');
const { createTokenPairsCommand } = require('./commands/token-pairs');
const { createOrdersCommand } = require('./commands/orders');
const { createTransactionsCommand } = require('./commands/transactions');
const { createRecentUpdatesCommand } = require('./commands/recent-updates');
const { createTakeoversCommand } = require('./commands/takeovers');
const { createAdsCommand } = require('./commands/ads');
const { createMetasCommand } = require('./commands/metas');
const { createMetaCommand } = require('./commands/meta');

const program = new Command();

program
  .name('dexscreener')
  .description('DexScreener CLI - Query token data from DexScreener API')
  .version('1.0.0');

program.addCommand(createSearchCommand());
program.addCommand(createTokenCommand());
program.addCommand(createPairCommand());
program.addCommand(createPoolsCommand());
program.addCommand(createProfilesCommand());
program.addCommand(createTokenPairsCommand());
program.addCommand(createOrdersCommand());
program.addCommand(createTransactionsCommand());
program.addCommand(createRecentUpdatesCommand());
program.addCommand(createTakeoversCommand());
program.addCommand(createAdsCommand());
program.addCommand(createMetasCommand());
program.addCommand(createMetaCommand());

program.parse(process.argv);