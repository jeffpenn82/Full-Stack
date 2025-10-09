import AJV from 'ajv';
import addFormats from 'ajv-formats';
import { v4 as uuid } from 'uuid';

import { TodoModel } from '../models/todo.model.js';
import { logger } from '../lib/logger.js';
import todoSchema from '../schemas/todo.json' with{ type: 'json' };

const ajv = new AJV();
addFormats(ajv);
const validate = ajv.compile(todoSchema);

export class TodoService {
  static getTodos() {
    logger.debug('Service : getTodos');
    return TodoModel.getTodos();
  }

  static getTodo(id) {
    logger.debug(`Service : getTodo, id: ${id}`);
    return TodoModel.getTodo(id);
  }

  static createTodo(todo) {
    const newTodo = {
      ...todo,
      id: uuid(),
      tracking: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    }

    const valid = validate(newTodo);
    if (!valid) {
      const errorMessage = ajv.errorsText(validate.errors);
      logger.error(`Service : createTodo validation failed - ${errorMessage}`);
      throw new Error(`Invalid todo data: ${errorMessage}`);
    }

    logger.debug('Service : createTodo');
    return TodoModel.createTodo(todo);
  }

  static updateTodo(id, todo) {

    const updateTodo = {
      ...todo,
      id,
      tracking: {
        ...todo.tracking,
        updatedAt: new Date().toISOString(),
      },
    };

    const valid = validate(updateTodo);
    if (!valid) {
      const errorMessage = ajv.errorsText(validate.errors);
      logger.error(`Service : updateTodo validation failed - ${errorMessage}`);
      throw new Error(`Invalid todo data: ${errorMessage}`);
    }

    logger.debug(`Service : updateTodo, id: ${id}`);
    return TodoModel.updateTodo(id, todo);
  }

  static replaceTodo(id, todo) {
    const replaceTodo = {
      ...todo,
      id,
      tracking: {
        ...todo.tracking,
        updatedAt: new Date().toISOString(),
      },
    };
    const valid = validate(replaceTodo);
    if (!valid) {
      const errorMessage = ajv.errorsText(validate.errors);
      logger.error(`Service : replaceTodo validation failed - ${errorMessage}`);
      throw new Error(`Invalid todo data: ${errorMessage}`);
    }
    logger.debug(`Service : replaceTodo, id: ${id}`);
    return TodoModel.replaceTodo(id, todo);
  }

  static deleteTodo(id) {
    logger.debug(`Service : deleteTodo, id: ${id}`);
    return TodoModel.deleteTodo(id);
  }
}
