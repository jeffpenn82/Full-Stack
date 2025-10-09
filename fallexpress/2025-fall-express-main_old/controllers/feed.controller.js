import { FeedService } from '../services/feed.service.js';

export class FeedController {
  static getFeed(req, res) {
    const feed = FeedService.getFeed();
    res.status(200).json(feed);
  }
}
