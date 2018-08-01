import React from 'react'
import ReactLoading from 'react-loading'

const Loading = props => (
  <ReactLoading className={props.className} type={props.type} color={props.color} height={700} width={200} />
)

module.exports = Loading
