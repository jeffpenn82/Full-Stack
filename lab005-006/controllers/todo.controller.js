import { logger } from '../lib/logger.js';
import { TodoService } from '../services/todos.service.js';

export class TodoController {

  static async getTodos(req, res, next) {
    logger.debug('Controller : getTodos');
    try {
      const resultCursor = await TodoService.getTodos();
      res.status(200).json(await resultCursor.toArray());
    } catch (err) {
      logger.error(`Controller : getTodos failed - ${err.message}`);
      return next(err);
    }
  }

  static async getTodo(req, res) {
    logger.debug(`Controller : getTodo, id: ${req.params.id}`);
    try{   
        const result = await TodoService.getTodo(req.params.id);
        if (!result) {
            res.status(404).json({message: 'Todo not found'});
            return;
        }   
        res.status(200).json(result);
    } catch (err){
        logger.error(`Controller : getTodo failed - ${err.message}`);
        res.sendStatus(500);
        return;
    }
  }

  static async createTodo(req, res, next) {
    logger.debug('Controller : createTodo');
    try {
      const result = await TodoService.createTodo(req.body);
      res.status(201).json(result);
    } catch (err) {
      logger.error(`Controller : createTodo failed - ${err.message}`);
      return next(err);
    }
  }

  static async updateTodo(req, res) {
    logger.debug(`Controller : updateTodo, id: ${req.params.id}`);
    try{
        const result = await TodoService.updateTodo(req.params.id, req.body);
        if (!result) {
            res.sendStatus(404);
            return;
    }
    res.status(200).json(result);
    } catch(err){   
        logger.error(`Controller : updateTodo failed - ${err.message}`);
        res.sendStatus(500);
        return;
    }
  }

  static async replaceTodo(req, res) {
    logger.debug(`Controller : replaceTodo, id: ${req.params.id}`);
    try{
    const result = await TodoService.replaceTodo(req.params.id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(result);
  } catch(err){
    logger.error(`Controller : replaceTodo failed - ${err.message}`);
    res.sendStatus(500);
    return;
  }
}
 
  static async deleteTodo(req, res) {
    logger.debug(`Controller : deleteTodo, id: ${req.params.id}`);
    try {
    await TodoService.deleteTodo(req.params.id);
    if (!req.params.id) {
      res.sendStatus(404);
      return;
    }
  } catch (err) {
    logger.error(`Controller : deleteTodo failed - ${err.message}`);
    res.sendStatus(500);
    return;
  }
}}
