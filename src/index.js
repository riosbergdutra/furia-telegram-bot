const bot = require('./bot');
require('./commands/nextMatch.command');
require('./commands/lastResult.command');
require('./commands/odds.command')
require('./commands/players.command');
require('./commands/stats.command');
require('./commands/calendar.command')
require('./commands/live.command')


bot.launch()
  .then(() => console.log('Bot FURIA online!'))
  .catch(err => console.error('Erro:', err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));