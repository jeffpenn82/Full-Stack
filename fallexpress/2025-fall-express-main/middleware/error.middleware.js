import { logger } from '../lib/logger.js';

export const errorHandler = (err, req, res, next) => {
  logger.error('errorHandler middleware', err);

  // If this is a validation error (generically)
  if (Array.isArray(err) && err[0].schemaPath) {
    res.status(400).json(err);
    next();
    return;
  }

  res.status(500).send(err.message || 'An unexpected error occurred!');
  next();
};
