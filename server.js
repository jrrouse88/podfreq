const
  dotenv = require('dotenv').load(),
  express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express(),
  // set a variable to connect to mongoDB for deployment or development
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/podfreq',
  // set a variable to connect to express app for deployment or development
  PORT = process.env.PORT || 3001,
  // import routes
  usersRoutes = require('./routes/users.js'),
  podcastRoutes = require('./routes/podcasts.js'),
  episodeRoutes = require('./routes/episodes.js')
;

// connect to mongoDB
mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `🖖🏾 Connected to MongoDB @ ${MONGODB_URI}`)
})

//set up middle ware for deployment, morgan, and parser
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

// set server root URL
app.get('/', (req, res) => {
  res.json({message: "API root."})
})

// use routes for various models
app.use('/users', usersRoutes)
app.use('/podcasts', podcastRoutes)
app.use('/episodes', episodeRoutes)

// middleware to help with deployment
app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

// connect to express server
app.listen(PORT, (err) => {
  console.log(err || `🤘🏾 Server running on ${PORT}`)
})