import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 10px;

  @media (max-width: 800px) {
    padding: ${props => (props.mobileWrap ? '0' : '0 10px')};
  }
`

const CardContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const LightGreyBackground = styled.div`
  background-color: #f5f5f5;
`

module.exports = {
  PageWrapper,
  LightGreyBackground,
  CardContentWrapper
}
