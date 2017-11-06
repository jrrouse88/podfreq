const
  mongoose = require('mongoose'),
  podcastSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    category: String,
    art: String
  })
;

const Podcast = mongoose.model('Podcast', podcastSchema)
module.exports = Podcast