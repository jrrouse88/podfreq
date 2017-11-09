import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

ReactDOM.render(
  <div>
    <Router><App /></Router>
  </div>, 
  document.getElementById('root')
)
registerServiceWorker()