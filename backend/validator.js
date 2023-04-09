const urlValidator = /https?:\/\/(www\.)?[\w\-.]+\.\w{2,}([\w\-._~:/?#[\]@!$&'()*+,;=]+)?/;
const JWT_SECRET = (process.env.NODE_ENV === 'production' && process.env.JWT_SECRET) ? process.env.JWT_SECRET : 'jwt-secret-key';

module.exports = { urlValidator, JWT_SECRET };
