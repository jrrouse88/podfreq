const
  express = require('express'),
  podcastsRouter = new express.Router(),
  podcastsCtrl = require('../controllers/podcasts.js')
;

podcastsRouter.get('/', podcastsCtrl.index)

podcastsRouter.get('/:castId', podcastsCtrl.show)

module.exports = podcastsRouter