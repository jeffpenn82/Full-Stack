import { MongoClient } from 'mongodb';

import { logger } from './logger.js';

class Mongo {
  db = '';

  init = async (uri, database, connectionOptions) => {
    const client = new MongoClient(uri, connectionOptions);
    // TODO: Try/Catch
    await client.connect();
    const cleanUrl = uri.indexOf('@') > -1 ? uri.slice(uri.indexOf('@') + 1) : uri;
    logger.info(`Connected to Mongo @ ${cleanUrl}`);
    this.db = client.db(database);
    logger.info(`Selected Mongo database named : ${database}`);
  }

  getDb = () => {
    return this.db;
  }
}

export const buildConnectionString = (mongoConfig) => {
  return `${mongoConfig.protocol}${ mongoConfig.username ? `${mongoConfig.username}:${mongoConfig.password}@` : '' }${mongoConfig.url}`;
};


export const mongo = new Mongo();