import AJV from 'ajv';
import addFormats from 'ajv-formats';
import { v4 as uuid } from 'uuid';

import { logger } from '../lib/logger.js';
import { ChickenModel } from '../models/chickens.model.js';
import chickenSchema from '../schemas/chicken.json' with { type: 'json' };

const ajv = new AJV();
addFormats(ajv);
const validate = ajv.compile(chickenSchema);

/*
if (!valid) {
    console.error('Error validating input data against the JSON Schema');
    console.error(validate.errors);
} 
*/

export class ChickenService {
  static getChickens() {
    logger.debug('Service : getChickens');
    return ChickenModel.getChickens();
  }

  static getChicken(id) {
    logger.debug(`Service : getChicken, id: ${id}`);
    return ChickenModel.getChicken(id);
  }

  static createChicken(chicken) {
    const newChicken = {
      ...chicken,
      id: uuid(),
      tracking: {
        createdDate: new Date(),
      }
    };

    const valid = validate(newChicken);
    if (!valid) {
      logger.warn('Validation error on creating a new chicken!', validate.errors);
      throw validate.errors;
    }

    logger.debug('Service : createChicken');
    return ChickenModel.createChicken(newChicken);
  }

  static updateChicken(id, chicken) {
    // Don't let the user overwrite the ID
    const updateChicken = {
      ...chicken,
      id,
      tracking: {
        updatedDate: new Date(),
      }
    };

    const valid = validate(updateChicken);
    if (!valid) {
      logger.warn('Validation error on creating a new chicken!', validate.errors);
      throw validate.errors;
    }

    logger.debug(`Service : updateChicken, id: ${id}`);
    return ChickenModel.updateChicken(id, updateChicken);
  }

  static replaceChicken(id, chicken) {
    // Don't let the user overwrite the ID
    const replaceChicken = {
      ...chicken,
      id,
      tracking: {
        updatedDate: new Date(),
      }
    };

    const valid = validate(replaceChicken);
    if (!valid) {
      logger.warn('Validation error on creating a new chicken!', validate.errors);
      throw validate.errors;
    }

    logger.debug(`Service : replaceChicken, id: ${id}`);
    return ChickenModel.replaceChicken(id, replaceChicken);
  }

  static deleteChicken(id) {
    logger.debug(`Service : deleteChicken, id: ${id}`);
    return ChickenModel.deleteChicken(id);
  }
}
