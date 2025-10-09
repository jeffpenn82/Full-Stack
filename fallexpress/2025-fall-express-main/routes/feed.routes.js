import express from 'express';

import { FeedController } from '../controllers/feed.controller.js';

export const feedRouter = express.Router();

feedRouter.get('/', FeedController.getFeed);
