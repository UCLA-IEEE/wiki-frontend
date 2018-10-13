import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"

import { Title } from "../components/Typography"
import Loading from "../components/Loading"
import { PageWrapper } from "../components/Wrappers"
import { API_HOST } from "../config"

// s is an enum of possible state values
const s = {
  Searching: 0,
  Done: 1
}

const SearchResultWrapper = styled.div`
  margin: 30px 0;
  text-align: left;

  p {
    margin: 5px 0;
  }
`

const SearchResult = props => {
  let modified = new Date(props.modified)
  return (
    <SearchResultWrapper>
      <h1>{props.title}</h1>
      <p>{modified.toDateString()}</p>
      <p>{props.description}</p>
    </SearchResultWrapper>
  )
}

const SearchResultLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: s.Searching,
      results: []
    }

    this.getSearchResults = this.getSearchResults.bind(this)
  }

  componentDidMount() {
    let queryParameter = this.props.match.params.query
    this.getSearchResults(queryParameter)
      .then(res =>
        this.setState(prev => {
          prev.status = s.Done
          prev.results = res.data
          return prev
        })
      )
      .catch(err => console.log(err))
  }

  componentWillReceiveProps(newProps) {
    this.setState(prev => {
      prev.status = s.Searhcing
      return prev
    })

    let newQueryParameter = this.props.match.params.query
    this.getSearchResults(newQueryParameter)
      .then(res =>
        this.setState(prevState => {
          return { status: "done", results: res.data }
        })
      )
      .catch(err => console.log(err))
  }

  getSearchResults(query) {
    return axios.get(API_HOST + "/page")
  }

  render() {
    let searchingUI = <Loading />

    let doneUI = (
      <PageWrapper maxWidth="900px">
        <Title>Search Results</Title>

        <div style={{ textAlign: "center" }}>
          {this.state.results.map((r, i) => (
            <SearchResultLink key={i} to={"/page/" + r.slug}>
              <SearchResult title={r.title} modified={r.updatedAt} description={r.description} />
            </SearchResultLink>
          ))}
        </div>
      </PageWrapper>
    )

    switch (this.state.status) {
      case s.Searching:
        return searchingUI
      case s.Done:
        return doneUI
    }
  }
}

module.exports = SearchPage
