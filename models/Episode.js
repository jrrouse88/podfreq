const
mongoose = require('mongoose'),
episodeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  length: Number,
  thumbnail: String
})
;

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode