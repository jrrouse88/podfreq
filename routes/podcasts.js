const
  express = require('express'),
  podcastsRouter = new express.Router(),
  podcastsCtrl = require('../controllers/podcasts.js')
;

podcastsRouter.route('/')
  .get(podcastsCtrl.index)
  .post(podcastsCtrl.create)
;

podcastsRouter.route('/:castId')
  .get(podcastsCtrl.show)
  .patch(podcastsCtrl.update)
  .delete(podcastsCtrl.destroy)
;

module.exports = podcastsRouter