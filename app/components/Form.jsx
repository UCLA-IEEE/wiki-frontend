import React from "react"
import styled from "styled-components"

const FormGroup = styled.div`
  padding: 10px 0;
`

const SubLabel = styled.label`
  font-size: 12px;
  font-weight: 100;
`

const Input = styled.input`
  display: ${props => props.display || "inline-block"};
  width: ${props => props.width || "300px"};
  font-size: 20px;
  border: solid transparent 1px
  border-bottom: solid #c4c4c4 1px;
  outline: none;
  padding: 5px;
  box-sizing: border-box;

  :focus {
    border: solid #c4c4c4 1px;
  }

  :read-only {
    background-color: lightGrey;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: ${props => props.height || "50px"};
  padding: 10px;
  resize: none;
  outline: none;
  border-radius: 2px;
  border: solid #c4c4c4 1px
  box-sizing: border-box;
  font-size: 18px;
  font-family: ${props => (props.code ? "'Menlo', 'Source Code Pro', monospace" : "inherit")}
`

module.exports = {
  FormGroup,
  SubLabel,
  Input,
  TextArea
}
