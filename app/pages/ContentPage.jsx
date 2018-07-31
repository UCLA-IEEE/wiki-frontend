import React from 'react'
import Navbar from '../components/Navbar'

const ContentPage = props => {
  return (
    <div>
      <Navbar />
      <p>Hello, World! This is the query: {props.match.params.slug}</p>
    </div>
  )
}

module.exports = ContentPage
