const logger = require('./logger');

module.exports = {
  handle: (error, ctx) => {
    logger.error(`Erro em ${ctx.updateType}: ${error.stack}`);

    // Respostas personalizadas
    const errorMessages = {
      HLTV: '🔴 Problema temporário nos dados de CS:GO',
      Twitter: '🐦 Erro ao conectar com o Twitter',
      default: '⚠️ Ocorreu um erro inesperado'
    };

    const errorType = Object.keys(errorMessages).find(key => 
      error.message.toLowerCase().includes(key.toLowerCase())
    ) || 'default';

    ctx.reply(errorMessages[errorType]);

    // Notificação opcional para administradores
    if (process.env.ADMIN_ID) {
      ctx.telegram.sendMessage(
        process.env.ADMIN_ID,
        `‼️ ERRO NO BOT:\n${error.stack.slice(0, 3000)}`
      );
    }
  }
};