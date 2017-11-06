const
  express = require('express'),
  podcastsRouter = new express.Router(),
  podcastsCtrl = require('../controllers/podcasts.js'),
  episodesCtrl = require('../controllers/episodes.js')
;

podcastsRouter.get('/', podcastsCtrl.index)

podcastsRouter.get('/:castId', podcastsCtrl.show)

podcastsRouter.post('/:castId/episodes', episodesCtrl.create)

podcastsRouter.route('/:castId/episodes/:episodeId')
  .patch(episodesCtrl.update)
  .delete(episodesCtrl.destroy)
;

module.exports = podcastsRouter