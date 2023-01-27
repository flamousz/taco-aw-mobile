const Redis = require("ioredis");
const redis = new Redis({
	host: process.env.REDIS_HOST,
	port: 10316,
	password: process.env.REDIS_PASS,
});

module.exports = redis;
