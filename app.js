import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import winston from './server/log';
import env from './server/config/env';
import router from './server/routes';

const { PORT } = env;

const app = express();
app.use(cors());
app.use(morgan('combined', { stream: winston }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', router);

const APP_PORT = PORT || 3000;
app.listen(APP_PORT, () => {
  console.log(
    `⚡️[server]: Server is running on port ${APP_PORT}`,
  );
});
