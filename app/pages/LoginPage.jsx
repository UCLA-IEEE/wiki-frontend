import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PageWrapper, Card } from '../components/Wrappers'
import { Title, BlueLink } from '../components/Typography'
import { Input } from '../components/Form'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    console.log('Sending request to login')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <PageWrapper mobileWrap>
        <Card style={{ textAlign: 'center' }}>
          <Title style={{ letterSpacing: '5px', textTransform: 'uppercase' }}>Login</Title>

          <form onSubmit={this.handleLoginSubmit}>
            <label>UCLA Email Address</label>
            <Input name="email" type="text" onChange={this.handleChange} />

            <label>Password</label>
            <Input name="password" type="Password" onChange={this.handleChange} />

            <div>
              <button type="submit">Login</button>
            </div>
          </form>

          <p>
            Don't have an account? <BlueLink to="/register">Register!</BlueLink>
          </p>
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = LoginPage
