import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import ContentPage from './pages/ContentPage'
import SearchPage from './pages/SearchPage'
import ErrorPage from './pages/ErrorPage'

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContentPage} />
          <Route path="/page/:slug" component={ContentPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

module.exports = Router
