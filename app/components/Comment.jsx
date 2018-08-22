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
    this.state = {
      currentComment: '',
      comments: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ currentComment: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState(prevState => ({
      currentComment: '',
      comments: [
        {
          name: 'Dummy User',
          message: prevState.currentComment
        },
        ...prevState.comments
      ]
    }))

    console.log('Making API request to submit comment')
  }

  componentWillReceiveProps(newProps) {
    this.setState(prevState => {
      return {
        comments: newProps.page.comments
      }
    })
  }

  render() {
    return (
      <CardContentWrapper>
        <h1>Comments</h1>
        <form onSubmit={this.onSubmit}>
          <div style={{ width: '100%', padding: '1px' }}>
            <textarea value={this.state.currentComment} onChange={this.onChange} />
          </div>
          <button type="submit">Submit</button>
        </form>

        {this.state.comments.map((c, i) => (
          <Comment key={i} name={c.name} message={c.message} />
        ))}
      </CardContentWrapper>
    )
  }
}

module.exports = { CommentSection }
