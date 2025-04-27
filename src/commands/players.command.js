const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function playersCommand(ctx) {
  try {
    await ctx.replyWithChatAction('typing');
    
    const players = await Service.getTeamPlayers();
    
    let message = '*🐆 Jogadores da FURIA CS:GO:*\n\n';
    players.forEach(player => {
      message += escapeMarkdown(
        `🔫 *${player.nickname}* (${player.name})\n` +
        `🏆 Rating: ${player.rating || 'N/A'}\n` +
        `🎯 Função: ${player.role}\n\n`
      );
    });

    await ctx.replyWithMarkdownV2(message);
  } catch (error) {
    console.error('Erro jogadores:', error);
    await ctx.reply('⚠️ Não foi possível obter a lista de jogadores.');
  }
}

module.exports = playersCommand;