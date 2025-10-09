import { logger } from '../lib/logger.js';
import { ChickenService } from '../services/chickens.service.js';

export class ChickenController {
  static async getChickens(req, res, next) {
    logger.debug('Controller : getChickens');
    const resultCursor = await ChickenService.getChickens();
    res.status(200).json(await resultCursor.toArray());
  }

  static async getChicken(req, res) {
    logger.debug(`Controller : getChicken, id: ${req.params.id}`);
    const result = await ChickenService.getChicken(req.params.id);

    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  static async createChicken(req, res) {
    logger.debug('Controller : createChicken');
    const result = await ChickenService.createChicken(req.body);
    res.status(201).json(result);
  }

  static async updateChicken(req, res) {
    logger.debug(`Controller : updateChicken, id: ${req.params.id}`);
    const result = await ChickenService.updateChicken(req.params.id, req.body);

    // If truthy - successful
    if (result) {
      res.status(200).json(result);
      return;
    }

    res.sendStatus(404);
  }

  static async replaceChicken(req, res) {
    logger.debug(`Controller : replaceChicken, id: ${req.params.id}`);
    const result = await ChickenService.replaceChicken(req.params.id, req.body);

    // If falsy - failed
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  static async deleteChicken(req, res) {
    logger.debug(`Controller : deleteChicken, id: ${req.params.id}`);
    await ChickenService.deleteChicken(req.params.id);

    res.sendStatus(204);
  }
}
