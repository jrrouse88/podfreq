const
  express = require('express'),
  episodesRouter = new express.Router(),
  episodesCtrl = require('../controllers/episodes.js'),

;

episodesRouter.get('/', episodesCtrl.index)

episodesRouter.get('/:episodeId', episodesCtrl.show)

module.exports = episodesRouter