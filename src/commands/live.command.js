const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function liveCommand(ctx) {
  try {
    await ctx.replyWithChatAction('typing');
    const livePlayers = await Service.getLivePlayers();

    if (!livePlayers.length) {
      return ctx.reply('🔴 Nenhum jogador da FURIA está transmitindo no momento.');
    }

    let message = '🎮 *Jogadores da FURIA ao vivo agora:*\n\n';
    livePlayers.forEach(player => {
      message += escapeMarkdown(
        `▶️ *${player.nickname}*\n` +
        `📺 ${player.title}\n` +
        `🔗 [Assistir](${player.url})\n\n`
      );
    });

    await ctx.replyWithMarkdownV2(message, {
      disable_web_page_preview: true
    });
  } catch (error) {
    console.error('Erro no comando /live:', error);
    await ctx.reply('⚠️ Não foi possível verificar as transmissões.');
  }
}

module.exports = liveCommand;