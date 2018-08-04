import React from 'react'
import styled from 'styled-components'

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
  Input
}
