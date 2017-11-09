import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import App from './App'
import options from './options'

ReactDOM.render(
  <div>
    <ReactJkMusicPlayer {...options} /><Router><App /></Router>
  </div>, 
  document.getElementById('root')
)
registerServiceWorker()