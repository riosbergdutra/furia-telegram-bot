const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function calendarCommand(ctx) {
  try {
    await ctx.replyWithChatAction('typing');
    
    const matches = await Service.getTeamMatches();
    const upcomingMatches = matches.filter(m => !m.result);
    
    if (!upcomingMatches.length) {
      return ctx.reply('🗓️ A FURIA não tem partidas agendadas nas próximas semanas.');
    }

    let message = '🗓️ *Calendário da FURIA:*\n\n';
    upcomingMatches.forEach((match, index) => {
      message += escapeMarkdown(
        `${index + 1}. *${match.team1} vs ${match.team2}*\n` +
        `📅 ${match.date.toLocaleDateString('pt-BR')} ` +
        `⏰ ${match.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}\n` +
        `🏆 ${match.event}\n` +
        `🌍 ${match.format}` +
        (match.link ? `\n🔗 [Detalhes](${match.link})\n\n` : '\n\n')
      );
    });

    await ctx.replyWithMarkdownV2(message, {
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Erro no calendário:', error);
    await ctx.reply('⚠️ Calendário temporariamente indisponível.');
  }
}

module.exports = calendarCommand;