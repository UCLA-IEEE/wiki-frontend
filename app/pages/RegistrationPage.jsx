import React, { Component } from 'react'
import styled from 'styled-components'

import Footer from '../components/Footer'
import { PageWrapper, Card } from '../components/Wrappers'
import { Title } from '../components/Typography'
import { Button, Input } from '../components/Form'

const RTitle = Title.extend`
  letter-spacing: 5px;
  text-transform: uppercase;
`

const P = styled.p`
  margin: 5px 0;
`

const WhitePageWrapper = PageWrapper.extend`
  background-color: white;
`

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
    let field = e.target.name
    let value = e.target.value
    this.setState({
      [field]: e.target.value
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
          <RTitle>Wiki Registration</RTitle>
          <form onSubmit={this.handleRegistrationSubmit}>
            <P style={{ margin: '10px 0' }}>
              <strong>UCLA Email Address</strong>
            </P>
            <Input name="email" type="text" onChange={this.handleChange} />

            <P>
              <strong>Password</strong>
            </P>
            <Input name="password" type="Password" onChange={this.handleChange} />

            <P>
              <strong>Confirm Password</strong>
            </P>
            <Input name="passwordConfirm" type="Password" onChange={this.handleChange} />

            <div>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = RegistrationPage
