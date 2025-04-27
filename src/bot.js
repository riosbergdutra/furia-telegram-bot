const { Telegraf, Markup } = require('telegraf');
const dotenv = require('dotenv');
const { escapeMarkdown } = require('./utils/helpers');

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Middleware de logging
bot.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const responseTime = Date.now() - start;
  console.log(`Response time: ${responseTime}ms`);
});

// Comando de início com menu completo
bot.command('start', async (ctx) => {
  await ctx.replyWithMarkdownV2(
    '*Bem\\-vindo ao FURIA CS2 Bot\\!* 🐆\n\nAcompanhe tudo sobre o time de CS2 da FURIA em 2025!',
    Markup.inlineKeyboard([
      [
        Markup.button.callback('Próxima Partida ⏭️', 'next_match'),
        Markup.button.callback('Último Resultado 📊', 'last_result')
      ],
      [
        Markup.button.callback('Jogadores 👥', 'players'),
        Markup.button.callback('Estatísticas 📈', 'stats')
      ],
      [
        Markup.button.callback('Calendário 🗓️', 'calendar'),
        Markup.button.callback('Lives 🎥', 'live')  // Novo botão para lives
      ]
    ])
  );
});

// Comandos principais
bot.command('proxpartida', require('./commands/nextMatch.command'));
bot.command('ultimoresultado', require('./commands/lastResult.command'));
bot.command('jogadores', require('./commands/players.command'));
bot.command('estatisticas', require('./commands/stats.command'));
bot.command('odds', require('./commands/odds.command'));
bot.command('calendario', require('./commands/calendar.command'));
bot.command('live', require('./commands/live.command'));  // Comando de lives

// Handler para o botão de lives
bot.action('live', async (ctx) => {
  await ctx.answerCbQuery();
  await require('./commands/live.command')(ctx);
});

// Comandos de ajuda
bot.command(['ajuda', 'help'], (ctx) => ctx.replyWithMarkdownV2(
  '📌 *Comandos disponíveis:*\n\n' +
  '🐆 /proxpartida - Próximo jogo\n' +
  '📊 /ultimoresultado - Resultado da última partida\n' +
  '👥 /jogadores - Elenco atual\n' +
  '📈 /estatisticas - Estatísticas do time\n' +
  '🗓️ /calendario - Agenda de jogos\n' +
  '🎥 /live - Jogadores transmitindo agora\n' +  // Adicionado ao help
  '🎲 /odds - Probabilidades das partidas'
));

// Tratamento de erros
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('⚠️ Ocorreu um erro. Tente novamente mais tarde.');
});

// Mensagem para comandos não reconhecidos
bot.on('text', (ctx) => {
  ctx.replyWithMarkdownV2(
    'Comando não reconhecido 🤔\n\n' +
    'Digite /ajuda para ver os comandos disponíveis'
  );
});

module.exports = bot;