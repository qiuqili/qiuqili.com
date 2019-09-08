import React from "react"

const Button = props => (
  <a href={props.link}>
    <button>{props.name}</button>
  </a>
)

export default Button
