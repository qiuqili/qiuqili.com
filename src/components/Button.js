import React from "react"

const Button = ({ link, name }) => (
  <a href={link}>
    <button>{name}</button>
  </a>
)

export default Button
