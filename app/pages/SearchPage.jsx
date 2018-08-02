import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { Title } from '../components/Typography'
import Loading from '../components/Loading'
import { PageWrapper } from '../components/Wrappers'

// TODO: Remove this once you have an actual API call
import results from '../data/search-results'

const SearchResultWrapper = styled.div`
  margin: 30px 0;
  text-align: left;

  p {
    margin: 5px 0;
  }
`

const SearchResult = props => (
  <SearchResultWrapper>
    <h1>{props.title}</h1>
    <p>{props.modified}</p>
    <p>{props.description}</p>
  </SearchResultWrapper>
)

const SearchResultLink = styled(Link)`
  color: black;
  text-decoration: none;
`

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'searching',
      results: []
    }
  }

  componentDidMount() {
    let callback = () => {
      this.setState({
        status: 'done',
        results: results.results
      })
    }

    // TODO: Remove this delay with an actual call the API
    // for search results
    setTimeout(callback, 1000)
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} />

        <PageWrapper>
          <Title>Search Results</Title>

          <div style={{ textAlign: 'center' }}>
            {this.state.status === 'searching' ? (
              <Loading className="spinner" type="spin" color="#00629B" />
            ) : (
              this.state.results.map((r, i) => (
                <SearchResultLink key={i} to={'/page/' + r.slug}>
                  <SearchResult title={r.title} modified={r.modified} description={r.description} />
                </SearchResultLink>
              ))
            )}
          </div>
        </PageWrapper>
      </div>
    )
  }
}

module.exports = SearchPage
