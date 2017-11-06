const User = require('..models/User.js')

module.exports = {
  index: (req, res) => {
    User.find({}, (err, users) => {
      if (err) console.log(err)
      res.json(users)
    })
  },

  show: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) console.log(err)
      res.json(user)
    })
  },

  create: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "User created.", user})
    })
  },

  update: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      Object.assign(user, req.body)
      user.save((err, updatedUser) => {
        if (err) res.json({success: false, code: err.code})
        res.json({success: true, message: "User updated.", updatedUser})
      })
    })
  },

  destroy: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) res.json({success: false, code: err.code})
      res.json({success: true, message: "User deleted."})
    })
  }
}