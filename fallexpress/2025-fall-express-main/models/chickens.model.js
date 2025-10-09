import { Constants } from '../lib/constants.js';
import { logger } from '../lib/logger.js';
import { mongo } from '../lib/mongo.js';

export class ChickenModel {
  static getChickens() {
    logger.debug('ChickenModel : getChickens()');
    return mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).find({}, {
      projection: {
        _id: 0,
      },
    });
  }

  static getChicken(id) {
    logger.debug(`Model : getChicken, id: ${id}`);
    return mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).findOne({ id }, {
      projection: {
        _id: 0,
      },
    });
  }

  static async createChicken(chicken) {
    logger.debug('Model : createChicken');
    await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).insertOne(chicken);
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    delete chicken._id;
    return chicken;
  }

  static async updateChicken(id, chicken) {
    logger.debug(`Model : updateChicken, id: ${id}`);

    const updateStatement = {
      $set: {},
    };

    Object.keys(chicken).forEach((key) => {
      if (key === Constants.ID) {
        return;
      }

      updateStatement.$set[key] = chicken[key];
    });

    // TODO: try/catch
    const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS).findOneAndUpdate(
      { id },
      updateStatement,
      { returnDocument: 'after' },
    );

    // eslint-disable-next-line no-underscore-dangle
    delete result._id;
    // TODO: use object destructuring.
    return result;
  }

  static async replaceChicken(id, chicken) {
    logger.debug(`Model : replaceChicken, id: ${id}`);

    const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS)
      .replaceOne({ id }, chicken);

    if (!result.modifiedCount) {
      return false;
    }

    return chicken;
  }

  static async deleteChicken(id) {
    logger.debug(`Model : deleteChicken, id: ${id}`);
    const result = await mongo.getDb().collection(Constants.CHICKENS_COLLECTIONS)
      .deleteOne({ id });

    if (!result.deletedCount) {
      return false;
    }

    return true;
  }
}
