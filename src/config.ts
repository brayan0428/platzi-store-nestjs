import { registerAs } from '@nestjs/config';
export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    apiKey: process.env.API_KEY,
  };
});
