const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js'),
  podcastsCtrl = require('../controllers/podcasts.js')
;

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)
;

usersRouter.route('/:id')
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)
;

usersRouter.post('/:id/podcasts', podcastsCtrl.create)

usersRouter.route('/:id/podcasts/:castId')
  .patch(podcastsCtrl.update)
  .delete(podcastsCtrl.destroy)
;

module.exports = usersRouter