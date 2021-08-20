import redis from 'redis';
import env from './env';

const {
  REDIS_HOST: host,
  REDIS_PORT: port,
  REDIS_PASSWORD: password,
  REDIS_URL: url,
} = env;

const client = url
  ? redis.createClient(url) : redis.createClient({
    port,
    host,
    password,
  });

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log(`Something went wrong:  ${err}`);
});

export default client;
