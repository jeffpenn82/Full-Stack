import { Constants } from '../lib/constants.js';
import { logger } from '../lib/logger.js';
import { mongo } from '../lib/mongo.js';

export class TodoModel {
  static getTodos() {
    logger.debug('TodoModel : getTodos()');
    return mongo.getDb().collection(Constants.TODO_COLLECTIONS).find({}, {
      projection: {
        _id: 0,
      },
    });
  }

  static getTodo(id) {
    logger.debug(`Model : getTodo, id: ${id}`);
    return mongo.getDb().collection(Constants.TODO_COLLECTIONS).findOne({ id }, {
      projection: {
        _id: 0,
      },
    });
  }

  static async createTodo(todo) {
    logger.debug('Model : createTodo');
    await mongo.getDb().collection(Constants.TODO_COLLECTIONS).insertOne(todo);
    delete todo._id;
    return todo;
  }

  static async updateTodo(id, todo) {
    logger.debug(`Model : updateTodo, id: ${id}`);

    const updateStatement = {
      $set: {},
    };

    Object.keys(todo).forEach((key) => {
      if (key === Constants.ID) {
        return;
      }

      updateStatement.$set[key] = todo[key];
    });

    const result = await mongo.getDb().collection(Constants.TODO_COLLECTIONS).findOneAndUpdate(
      { id },
      updateStatement,
      { returnDocument: 'after' },
    );

    delete result._id;

    return result;
  }

  static async replaceTodo(id, todo) {
    logger.debug(`Model : replaceTodo, id: ${id}`);

    const result = await mongo.getDb().collection(Constants.TODO_COLLECTIONS)
      .replaceOne({ id }, todo);

    if (!result.modifiedCount) {
      return false;
    }

    return todo;
  }

  static async deleteTodo(id) {
    logger.debug(`Model : deleteTodo, id: ${id}`);
    const result = await mongo.getDb().collection(Constants.TODO_COLLECTIONS)
      .deleteOne({ id });

    if (!result.deletedCount) {
      return false;
    }

    return true;
  }
}
