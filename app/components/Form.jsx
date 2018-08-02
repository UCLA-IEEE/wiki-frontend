import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #00629b
  border-radius: 50px;
  border-shadow: none;
  border: none;
  padding: 5px 25px;
  outline: none;
`

const Input = styled.input`
  display: inline-block;
  width: 300px;
  font-size: 20px;
  margin: 0 0 30px;
  border: none;
  border-bottom: solid #c4c4c4 1px;
  outline: none;
  padding: 5px;

  :focus {
    border: solid #c4c4c4 1px;
  }
`

module.exports = {
  Button,
  Input
}
