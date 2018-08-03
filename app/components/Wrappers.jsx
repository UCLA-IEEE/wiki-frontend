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

const Card = styled.div`
  margin: 20px 0;
  padding: 15px 10px 30px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 25%);
`

const CardContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

module.exports = {
  PageWrapper,
  CardContentWrapper,
  Card
}
