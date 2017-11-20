const
  express = require('express'),
  podcastsRouter = new express.Router(),
  podcastsCtrl = require('../controllers/podcasts.js'),
  episodesCtrl = require('../controllers/episodes.js'),
  verifyToken = require('../serverAuth.js').verifyToken
  Podcast = require('../models/Podcast.js')
;

podcastsRouter.get('/', podcastsCtrl.index)

podcastsRouter.get('/:castId', podcastsCtrl.show)

// function matchUserToEpisodeOwner(req, res, next) {
// 	Podcast.findById(req.params.castId, 'user', (err, podcast) => {
// 		if(podcast.user._id === req.user._id) return next()
// 		res.json({success: false, message: "Not authorized..."})
// 	})
// }

// verify token must happen before matching the user this way...
podcastsRouter.use(verifyToken)
//podcastsRouter.use(matchUserToEpisodeOwner)
podcastsRouter.post('/:castId/episodes', episodesCtrl.create)

podcastsRouter.route('/:castId/episodes/:episodeId')
  .patch(episodesCtrl.update)
  .delete(episodesCtrl.destroy)
;

module.exports = podcastsRouter