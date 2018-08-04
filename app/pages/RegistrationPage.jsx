import React, { Component } from 'react'
import styled from 'styled-components'

import { PageWrapper, Card } from '../components/Wrappers'
import { Title } from '../components/Typography'
import { Input } from '../components/Form'

class RegistrationPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegistrationSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    console.log('Sending request to register an account!')
  }

  render() {
    return (
      <PageWrapper mobileWrap>
        <Card style={{ textAlign: 'center' }}>
          <Title style={{ letterSpacing: '5px', textTransform: 'uppercase' }}>Wiki Registration</Title>

          <form onSubmit={this.handleRegistrationSubmit}>
            <label>UCLA Email Address</label>
            <Input name="email" type="text" onChange={this.handleChange} />

            <label>Password</label>
            <Input name="password" type="Password" onChange={this.handleChange} />

            <label>Confirm Password</label>
            <Input name="passwordConfirm" type="Password" onChange={this.handleChange} />

            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = RegistrationPage
