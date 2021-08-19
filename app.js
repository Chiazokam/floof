import express from 'express';
import morgan from 'morgan';

import winston from './server/log';
import env from './server/config/env';
import router from './server/routes';

const app = express();
app.use(morgan('combined', { stream: winston }));

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

app.use('/api/v1', router);
app.listen(env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${env.PORT}`
  );
});