import React from "react"
import ReactLoading from "react-loading"

const defaultColor = "#00629B"
const defaultLoadingType = "spin"
const defaultClassName = "spinner"

const Loading = props => {
  let color = props.color || defaultColor
  let type = props.type || defaultLoadingType
  let className = props.className || defaultClassName

  return (
    <div style={{ textAlign: "center" }}>
      <ReactLoading className={className} type={type} color={color} height={700} width={200} />
    </div>
  )
}

module.exports = Loading
