const
  mongoose = require('mongoose'),
  podcastSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    category: String,
    art: String,
    episodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Episode'}],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })
;

const Podcast = mongoose.model('Podcast', podcastSchema)
module.exports = Podcast