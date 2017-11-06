const Podcast = require('../models/Podcast.js')

module.exports = {
  index: (req, res) => {
    Podcast.find({}, (err, podcasts) => {
      if (err) console.log(err)
      res.json(podcasts)
    })
  },

  show: (req, res) => {
    Podcast.findById(req.params.id, (err, podcast) => {
      if (err) console.log(err)
      res.json(podcast)
    })
  },

  create: (req, res) => {
    Podcast.create(req.body, (err, podcast) => {
      if (err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "User created.", podcast})
    })
  },

  update: (req, res) => {
    Podcast.findById(req.params.id, (err, podcast) => {
      Object.assign(podcast, req.body)
      podcast.save((err, updatedPod) => {
        if (err) res.json({success: false, code: err.code})
        res.json({success: true, message: "Podcast updated.", updatedPod})
      })
    })
  },

  destroy: (req, res) => {
    Podcast.findByIdAndRemove(req.params.id, (err, podcast) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "Podcast deleted."})
    })
  }
}