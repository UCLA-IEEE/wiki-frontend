import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import hljs from 'highlightjs'

import { PageWrapper, CardContentWrapper, Card } from '../components/Wrappers'
import { Title } from '../components/Typography'
import { CommentSection } from '../components/Comment'
import { API_HOST } from '../config'

const Tag = styled.span`
  display: inline-block;
  margin: 10px;
  padding: 5px 25px;
  background-color: #00629b;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`

class ContentPage extends Component {
  constructor(props) {
    super(props)
    this.state = { page: {} }
  }

  componentWillMount() {
    axios
      .get(API_HOST + '/page/email-forwarding')
      .then(res =>
        this.setState(prevState => {
          return { page: res.data }
        })
      )
      .catch(err => console.log(err))
  }

  componentDidMount() {
    // Apply highlight.js for dynamically added code segments
    for (let e of document.getElementsByTagName('pre')) {
      e.innerHTML = hljs.highlightAuto(e.innerText).value
    }
  }

  render() {
    let contributors = this.state.page.contributors ? this.state.page.contributors.join(', ') : null
    let tags = this.state.page.tags ? this.state.page.tags : []

    return (
      <PageWrapper mobileWrap>
        <Card>
          <CardContentWrapper>
            <Title>{this.state.page.title}</Title>
            <div dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
          </CardContentWrapper>
        </Card>

        <Card>
          <CardContentWrapper>
            <p>
              <strong>Tags:</strong>{' '}
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </p>
            <p>
              <strong>Contributors:</strong> {contributors}
            </p>
          </CardContentWrapper>
        </Card>

        <Card>
          <CommentSection page={this.state.page} />
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = ContentPage
