import express from 'express';
import config from 'config';

import { Constants } from './lib/constants.js';
import { mongo } from './lib/mongo.js';
import { ageClassifier } from './middleware/age-classifier.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';
import { chickenRouter } from './routes/chickens.routes.js';
import { feedRouter } from './routes/feed.routes.js';

const app = express();
const port = 3000;
const mongoConfig = config.get('mongodb');

app.use(express.json());
app.use('/api/v1/chickens', ageClassifier);

app.use('/api/v1/chickens', chickenRouter);
app.use('/api/v1/feed', feedRouter);

// Error handler :
app.use(errorHandler);

// TODO: Add proper logging (winston)

// TODO: Parameterize this from env config
const mongoOptions = {
  appName: mongoConfig.applicationName,
  minPoolSize: mongoConfig.minPoolSize,
  maxPoolSize: mongoConfig.maxPoolSize,
};

await mongo.init(mongoConfig.url, mongoConfig.database, mongoOptions);

app.listen(port, () => {
  console.log(`${new Date().toISOString()} : Chicken/Feed API is listening at http://localhost:${port}`);
});
