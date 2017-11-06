const
mongoose = require('mongoose'),
commentSchema = new mongoose.Schema({
  title: String,
  body: String
})
episodeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  length: Number,
  thumbnail: String,
  podcast: {type: mongoose.Schema.Types.ObjectId, ref: 'Podcast'},
  comments: [commentSchema]
})
;

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode