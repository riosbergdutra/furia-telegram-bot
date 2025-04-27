const Service = require('../services/service');
const { escapeMarkdown } = require('../utils/helpers');

async function statsCommand(ctx) {
  try {
    const stats = await Service.getTeamStats();
    
    const message = escapeMarkdown(
      `📊 *ESTATÍSTICAS DA FURIA (2025)*\n\n` +
      `🏆 Ranking Mundial: #${stats.overview.worldRanking}\n` +
      `📈 Win Rate: ${stats.overview.winRate} (${stats.overview.mapsPlayed} maps)\n` +
      `🔥 Sequência Atual: ${stats.overview.winStreak} vitórias\n\n` +
      `🗺️ *Performance por Mapa:*\n` +
      Object.entries(stats.mapPerformance).map(([map, data]) => 
        `• ${map}: ${data.winRate} (${data.played} jogos)`
      ).join('\n') +
      `\n\n🔄 Atualizado em: ${new Date(stats.lastUpdated).toLocaleDateString('pt-BR')}`
    );

    await ctx.replyWithMarkdownV2(message);
  } catch (error) {
    await ctx.reply('⚠️ Erro ao buscar estatísticas.');
  }
}

module.exports = statsCommand;