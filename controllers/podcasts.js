const Podcast = require('../models/Podcast.js')

module.exports = {
  index: (req, res) => {
    Podcast.find({}, (err, podcasts) => {
      if (err) console.log(err)
      res.json(podcasts)
    })
  },

  show: (req, res) => {
    Podcast.findById(req.params.castId, (err, podcast) => {
      if (err) console.log(err)
      res.json(podcast)
    })
  },

  create: (req, res) => {
    var newPodcast = new Podcast(req.body)
    newPodcast.user = req.params.id
    newPodcast.save((err, podcast) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Podcast created.", podcast})
    })
  },

  update: (req, res) => {
    Podcast.findById(req.params.castId, (err, podcast) => {
      Object.assign(podcast, req.body)
      podcast.save((err, updatedPod) => {
        if (err) res.json({success: false, code: err.code})
        res.json({success: true, message: "Podcast updated.", updatedPod})
      })
    })
  },

  destroy: (req, res) => {
    Podcast.findByIdAndRemove(req.params.castId, (err, podcast) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Podcast deleted."})
    })
  }
}