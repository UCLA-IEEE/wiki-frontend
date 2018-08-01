import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import { Title } from '../components/Typography'
import Loading from '../components/Loading'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'searching',
      results: []
    }
  }

  componentDidMount() {
    console.log('Making a search for: ' + this.props.match.params.query)
    this.setState({
      status: 'done',
      resuls: ['stuff']
    })
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} />

        <Title>Search Results</Title>
        <div style={{ textAlign: 'center' }}>
          {this.state.status === 'searching' ? (
            <Loading className="spinner" type="spin" color="#00629B" />
          ) : (
            <p>Hello</p>
          )}
        </div>
      </div>
    )
  }
}

module.exports = SearchPage
