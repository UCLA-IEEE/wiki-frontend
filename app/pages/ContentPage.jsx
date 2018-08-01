import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PageWrapper, LightGreyBackground, CardContentWrapper } from '../components/Wrappers'
import { Title } from '../components/Typography'
import { CommentSection } from '../components/Comment'

import page from '../data/page'

const Card = styled.div`
  margin: 20px 0;
  padding: 15px 10px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 25%);
`

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

  render() {
    return (
      <LightGreyBackground>
        <Navbar {...this.props} />

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

        <Footer />
      </LightGreyBackground>
    )
  }
}

module.exports = ContentPage
