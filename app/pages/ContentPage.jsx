import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PageWrapper } from '../components/Wrappers'
import { LightGreyBackground } from '../components/Wrappers'

class ContentPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LightGreyBackground>
        <Navbar {...this.props} />
        <PageWrapper>
          <p>Hello, World! This is the query: {this.props.match.params.slug}</p>
        </PageWrapper>
        <Footer />
      </LightGreyBackground>
    )
  }
}

module.exports = ContentPage
