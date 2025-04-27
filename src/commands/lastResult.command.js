const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function lastResultCommand(ctx) {
  try {
    const matches = await Service.getTeamMatches();
    
    const finishedMatches = matches.filter(m => 
      m.result && new Date(m.date) < new Date()
    ).sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (!finishedMatches.length) {
      return ctx.reply('📊 Nenhum resultado recente encontrado.');
    }

    const lastMatch = finishedMatches[0];
    const resultEmoji = lastMatch.result === 'win' ? '✅' : '❌';
    const resultText = lastMatch.result === 'win' ? 'VITÓRIA' : 'DERROTA';

    const message = escapeMarkdown(
      `${resultEmoji} *ÚLTIMO RESULTADO:*\n\n` +
      `🏆 ${lastMatch.event}\n` +
      `🆚 ${lastMatch.team1} ${lastMatch.score} ${lastMatch.team2}\n` +
      `📅 ${lastMatch.date.toLocaleString('pt-BR')}\n` +
      `🌍 Formato: ${lastMatch.format}\n` +
      `🔗 [HLTV](${lastMatch.link})`
    );

    await ctx.replyWithMarkdownV2(message);
  } catch (error) {
    console.error('Erro no último resultado:', error);
    await ctx.reply('⚠️ Não foi possível acessar os resultados.');
  }
}

module.exports = lastResultCommand;