import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { WhiteLink } from './Typography'
import { PageWrapper } from './Wrappers'

const NavbarContainer = styled.div`
  background-color: #00629b;
  text-align: center;
  padding: 20px 0;
`

const Logo = styled.img`
  width: 150px;
  position: absolute;
  left: 10px;

  @media (max-width: 750px) {
    display: none;
  }
`

const MobileLogo = styled.img`
  width: 40px;
  position: absolute;
  left: 10px;
  display: none;

  @media (max-width: 750px) {
    display: block;
  }
`

const SearchInput = styled.input`
  border-radius: 2px;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 5px;
  width: 50%;
  max-width: 600px;
  font-weight: bold;
  letter-spacing: 1px;
`

const NavbarText = styled.p`
  font-size: 15px;
  position: absolute;
  right: 10px;
  top: 0;
  margin: 7px;
  color: white;
`

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }

  handleQueryChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleQuerySubmit(e) {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.query}`)
  }

  render() {
    return (
      <NavbarContainer>
        <PageWrapper>
          <Link to="/">
            <Logo src={require('/public/logo.png')} />
          </Link>
          <Link to="/">
            <MobileLogo src={require('/public/IEEE_white_flag.png')} />
          </Link>

          <form onSubmit={this.handleQuerySubmit}>
            <SearchInput onChange={this.handleQueryChange} type="text" placeholder="Search.." />
          </form>

          <NavbarText>
            <WhiteLink to="/login">Login</WhiteLink> | <WhiteLink to="registration">Sign Up</WhiteLink>
          </NavbarText>
        </PageWrapper>
      </NavbarContainer>
    )
  }
}

module.exports = Navbar
