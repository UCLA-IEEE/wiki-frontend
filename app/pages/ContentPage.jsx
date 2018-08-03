import React, { Component } from 'react'
import styled from 'styled-components'
import hljs from 'highlightjs'

import { PageWrapper, CardContentWrapper, Card } from '../components/Wrappers'
import { Title } from '../components/Typography'
import { CommentSection } from '../components/Comment'

import page from '../data/page'

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
  }

  componentWillMount() {
    console.log('making request for page content ...')
  }

  componentDidMount() {
    // Apply highlight.js for dynamically added code segments
    for (let e of document.getElementsByTagName('pre')) {
      e.innerHTML = hljs.highlightAuto(e.innerText).value
    }
  }

  render() {
    return (
      <PageWrapper mobileWrap>
        <Card>
          <CardContentWrapper>
            <Title>{page.page.title}</Title>
            <div dangerouslySetInnerHTML={{ __html: page.page.content }} />
          </CardContentWrapper>
        </Card>

        <Card>
          <CardContentWrapper>
            <p>
              <strong>Tags:</strong> {page.page.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
            </p>
            <p>
              <strong>Contributors:</strong> {page.page.contributors.join(', ')}
            </p>
          </CardContentWrapper>
        </Card>

        <Card>
          <CommentSection page={page.page} />
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = ContentPage
