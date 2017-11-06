const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  })
;

userSchema.pre('save', function(next) {
  if(this.isModified('password')) {
    this.password = this.generateHash(this.password)
  }
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User