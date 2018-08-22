import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Title } from '../components/Typography'
import Loading from '../components/Loading'
import { PageWrapper } from '../components/Wrappers'

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

    this.getSearchResults = this.getSearchResults.bind(this)
  }

  componentDidMount() {
    let queryParameter = this.props.match.params.query
    this.getSearchResults(queryParameter)
      .then(res =>
        this.setState(prevState => {
          return { status: 'done', results: res.data }
        })
      )
      .catch(err => console.log(err))
  }

  componentWillReceiveProps(newProps) {
    this.setState(prev => {
      return { status: 'searching' }
    })

    let newQueryParameter = this.props.match.params.query
    this.getSearchResults(newQueryParameter)
      .then(res =>
        this.setState(prevState => {
          return { status: 'done', results: res.data }
        })
      )
      .catch(err => console.log(err))
  }

  getSearchResults(query) {
    return axios.get('http://localhost:3000/search?query=' + query)
  }

  render() {
    return (
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
    )
  }
}

module.exports = SearchPage
