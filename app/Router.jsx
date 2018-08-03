import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import ContentPage from './pages/ContentPage'
import ErrorPage from './pages/ErrorPage'
import RegistrationPage from './pages/RegistrationPage'
import SearchPage from './pages/SearchPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ContentPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route path="/page/:slug" component={ContentPage} />
            <Route path="/search/:query" component={SearchPage} />
            <Route path="" component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = Router
