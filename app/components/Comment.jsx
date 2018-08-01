import React, { Component } from 'react'
import styled from 'styled-components'

import { CardContentWrapper } from './Wrappers'

const CommentBox = styled.div`
  margin: 20px 0;
  padding: 5px 15px;
  border-left: solid #00629b 10px;
`

const Comment = props => {
  return (
    <CommentBox>
      <p>{props.name}</p>
      <p>{props.message}</p>
    </CommentBox>
  )
}

class CommentSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardContentWrapper>
        <h1>Comments</h1>
        {this.props.page.comments.map((c, i) => <Comment key={i} name={c.name} message={c.message} />)}
      </CardContentWrapper>
    )
  }
}

module.exports = { CommentSection }
