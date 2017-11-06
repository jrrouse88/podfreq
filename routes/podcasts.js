const
  express = require('express'),
  podcastsRouter = new express.Router(),
  podcastsCtrl = require('../controllers/podcasts.js')
;

podcastsRouter.route('/')
  .get(podcastsCtrl.index)
;

podcastsRouter.route('/:castId')
  .get(podcastsCtrl.show)
;

module.exports = podcastsRouter