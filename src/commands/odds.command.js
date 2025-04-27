const { Telegraf, Markup } = require('telegraf'); // Adicione esta linha
const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function oddsCommand(ctx) {
  try {
    await ctx.replyWithChatAction('typing');
    
    const matches = await Service.getTeamMatches();
    const nextMatch = matches.find(m => !m.result && !m.isLive);
    
    if (!nextMatch) {
      return ctx.reply('ℹ️ Não há partidas com odds disponíveis no momento.');
    }

    const odds = await Service.getMatchOdds(nextMatch.id);

    const message = escapeMarkdown(
      `🎲 *Odds para ${odds.teams.join(' vs ')}:*\n\n` +
      `💰 ${odds.teams[0]}: ${odds.odds[odds.teams[0]]}\n` +
      `💰 Empate: ${odds.odds.Draw}\n` +
      `💰 ${odds.teams[1]}: ${odds.odds[odds.teams[1]]}\n\n` +
      `📅 Atualizado em: ${odds.lastUpdated.toLocaleString('pt-BR')}\n` +
      `🔗 Fonte: [${odds.source.split('//')[1]}](${odds.source})`
    );

    await ctx.replyWithMarkdownV2(message, {
      disable_web_page_preview: true,
      ...Markup.inlineKeyboard([
        Markup.button.url('Ver Odds', odds.source)
      ])
    });

  } catch (error) {
    console.error('Erro ao buscar odds:', error);
    await ctx.reply('⚠️ Dados de odds temporariamente indisponíveis.');
  }
}

module.exports = oddsCommand;