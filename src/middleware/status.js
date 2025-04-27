const logger = require('../utils/logger');

module.exports.withStatus = async function withStatus(ctx, action, options = {}) {
  try {
    await ctx.replyWithChatAction('typing');
    
    if (options.loadingSticker) {
      await ctx.replyWithSticker(options.loadingSticker);
    }
    
    const result = await action();
    
    if (options.successSticker) {
      await ctx.replyWithSticker(options.successSticker);
    }
    
    return result;
  } catch (error) {
    logger.error('Erro in withStatus:', error);
    await ctx.reply('⏳ Buscando informações...'); 
    await ctx.reply('⚠️ Ocorreu um erro. Tente novamente mais tarde.');
    throw error;
  }
};