import React, { Component } from 'react'
import styled from 'styled-components'

import { PageWrapper } from './Wrappers'

const FooterContainer = styled.div`
  padding: 30px 0;
  margin-top: 40px;
`

const FooterText = styled.p`
  color: black;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
  display: inline-block;

  @media (max-width: 400px) {
    display: none;
  }
`

const SocialContainer = styled.div`
  float: right;
  margin-top: -4px;

  a {
    color: black;
  }

  i {
    margin: 0 10px;
  }

  @media (max-width: 400px) {
    float: none;
    text-align: center;
  }
`

const Footer = () => (
  <FooterContainer>
    <PageWrapper>
      <FooterText>IEEE at UCLA</FooterText>
      <SocialContainer>
        <a href="https://www.facebook.com/groups/uclaieee/" target="_blank">
          <i className="fa fa-facebook-square fa-2x" />
        </a>
        <a href="https://instagram.com/ieeebruins/" target="_blank">
          <i className="fa fa-instagram fa-2x" />
        </a>
        <a href="https://github.com/UCLA-IEEE" target="_blank">
          <i className="fa fa-github fa-2x" />
        </a>
        <a href="https://uclaieee.slack.com" target="_blank">
          <i className="fa fa-slack fa-2x" />
        </a>
      </SocialContainer>
    </PageWrapper>
  </FooterContainer>
)

module.exports = Footer
