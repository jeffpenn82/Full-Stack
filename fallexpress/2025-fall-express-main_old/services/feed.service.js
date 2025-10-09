import { FeedModel } from '../models/feed.model.js';

export class FeedService {
  static getFeed() {
    return FeedModel.getFeed();
  }
}
