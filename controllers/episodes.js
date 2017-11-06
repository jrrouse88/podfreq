const Episode = require('../models/Episode.js')

module.exports = {
  index: (req, res) => {
    Episode.find({}, (err, episodes) => {
      if (err) console.log(err)
      res.json(episodes)
    })
  },

  show: (req, res) => {
    Episode.findById(req.params.episodeId, (err, episode) => {
      if (err) console.log(err)
      res.json(episode)
    })
  },

  create: (req, res) => {
    var newEpisode = new Episode(req.body)
    newEpisode.podcast = req.params.castId
    newEpisode.save((err, episode) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Episode added.", episode})
    })
  },

  update: (req, res) => {
    Episode.findById(req.params.episodeId, (err, episode) => {
      Object.assign(episode, req.body)
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Episode updated.", episode})
    })
  },

  destroy: (req, res) => {
    Episode.findByIdAndRemove(req.params.episodeId, (err, episode) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Episode removed."})
    })
  }
}