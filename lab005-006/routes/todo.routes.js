import express from 'express';
import { TodoController } from '../controllers/todo.controller.js';


export const todoRouter = express.Router();

// All routes are prefixed with /api/v1/todos, only specify what follows :
todoRouter.get('/', TodoController.getTodos);
todoRouter.get('/:id', TodoController.getTodo);
todoRouter.post('/', TodoController.createTodo);
todoRouter.put('/:id', TodoController.replaceTodo);
todoRouter.patch('/:id', TodoController.updateTodo);
todoRouter.delete('/:id', TodoController.deleteTodo)