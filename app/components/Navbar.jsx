import React, { Component } from 'react'
import styled from 'styled-components'

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
          <Logo src={require('/public/logo.png')} />
          <MobileLogo src={require('/public/IEEE_white_flag.png')} />
          <form onSubmit={this.handleQuerySubmit}>
            <SearchInput onChange={this.handleQueryChange} type="text" placeholder="Search.." />
          </form>
        </PageWrapper>
      </NavbarContainer>
    )
  }
}

module.exports = Navbar
