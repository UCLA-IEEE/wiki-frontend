import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.h1`
  color: #00629b;
  font-size: 35px;
  text-align: center;
  margin: 30px 0 20px;
`

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const BlueLink = styled(Link)`
  color: #00629b;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

module.exports = {
  Title,
  WhiteLink,
  BlueLink
}
