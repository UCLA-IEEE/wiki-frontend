import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router"

import ContentPage from "./pages/ContentPage"
import ErrorPage from "./pages/ErrorPage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import SearchPage from "./pages/SearchPage"
import EditPage from "./pages/EditPage"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={ContentPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/page/:slug" component={ContentPage} />
            <Route path="/search/:query" component={SearchPage} />
            <Route path="/edit/:slug" component={EditPage} />
            <Route path="" component={ErrorPage} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = Router
