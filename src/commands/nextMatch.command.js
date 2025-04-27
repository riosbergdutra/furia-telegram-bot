const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function nextMatchCommand(ctx) {
  try {
    const matches = await Service.getTeamMatches();
    const nextMatch = matches.find(m => !m.isLive && !m.result);
    
    if (!nextMatch) {
      return ctx.reply('🎉 Não há partidas agendadas no momento. A FURIA está em preparação!');
    }

    const message = escapeMarkdown(
      `🐆 *PRÓXIMA PARTIDA:*\n\n` +
      `🏆 ${nextMatch.event}\n` +
      `🆚 ${nextMatch.team1} vs ${nextMatch.team2}\n` +
      `📅 ${nextMatch.date.toLocaleString('pt-BR')}\n` +
      `🌍 Formato: ${nextMatch.format}\n` +
      `🔗 [Detalhes](${nextMatch.link})`
    );

    await ctx.replyWithMarkdownV2(message);
  } catch (error) {
    await ctx.reply('⚠️ Sistema de partidas temporariamente indisponível.');
  }
}

module.exports = nextMatchCommand;