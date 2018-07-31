import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import ContentPage from './pages/ContentPage'

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContentPage} />
          <Route path="/page/:slug" component={ContentPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

module.exports = Router
