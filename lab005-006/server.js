
import express from 'express';
import config from 'config';

import { logger } from './lib/logger.js';
import { mongo, buildConnectionString } from './lib/mongo.js';
import { errorHandler } from './middleware/error.middleware.js';
import { todoRouter } from './routes/todo.routes.js';

const app = express();
const port = 3000;
const mongoConfig = config.get('mongodb');

app.use(express.json());
app.use('/api/v1/todos', todoRouter);

// Error handler :
app.use(errorHandler);

const mongoOptions = {
  appName: mongoConfig.applicationName,
  minPoolSize: mongoConfig.minPoolSize,
  maxPoolSize: mongoConfig.maxPoolSize,
};

// prefer a full url in config mongodb.url, otherwise build from parts
const mongoConnectString = mongoConfig.url || buildConnectionString(mongoConfig);

await mongo.init(mongoConnectString, mongoConfig.database, mongoOptions);

app.listen(port, () => {
  logger.info(`${new Date().toISOString()} : Todo API is listening at http://localhost:${port}`);
});
