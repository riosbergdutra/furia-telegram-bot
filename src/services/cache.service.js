const NodeCache = require('node-cache');
const logger = require('../utils/logger');

const cache = new NodeCache({ 
  stdTTL: 3600,
  checkperiod: 600,
  useClones: false,
  deleteOnExpire: true
});

module.exports = {
  get: (key) => cache.get(key),
  set: (key, value) => cache.set(key, value),
  del: (key) => cache.del(key),
  wrap: async (key, ttl, asyncFn) => {
    const cached = cache.get(key);
    if (cached) {
      logger.debug(`Cache hit for ${key}`);
      return cached;
    }
    
    logger.debug(`Cache miss for ${key}`);
    const result = await asyncFn();
    cache.set(key, result, ttl);
    return result;
  }
};