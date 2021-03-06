const
mongoose = require('mongoose'),
commentSchema = new mongoose.Schema({
  title: String,
  body: String
})
episodeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  duration: Number,
  cover: String,
  musicSrc: {type: String, required: true},
  podcast: {type: mongoose.Schema.Types.ObjectId, ref: 'Podcast'},
  comments: [commentSchema]
})
;

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode