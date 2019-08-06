import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import CapitalistRevolution from './CapitalistRevolution'

export default function() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/1-the-capitalist-revolution' exact component={CapitalistRevolution} />
    </Router>
  )
}
