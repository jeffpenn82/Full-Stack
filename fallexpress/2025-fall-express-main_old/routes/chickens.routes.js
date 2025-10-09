import express from 'express';

import { ChickenController } from '../controllers/chickens.controller.js';

export const chickenRouter = express.Router();

// All routes are prefixed with /api/v1/chickens, only specify what follows :
chickenRouter.get('/', ChickenController.getChickens);
chickenRouter.get('/:id', ChickenController.getChicken);
chickenRouter.post('/', ChickenController.createChicken);
chickenRouter.put('/:id', ChickenController.replaceChicken);
chickenRouter.patch('/:id', ChickenController.updateChicken);
chickenRouter.delete('/:id', ChickenController.deleteChicken);
