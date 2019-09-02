import React from "react"
import Button from "./Button"

const ListItem = props => (
  <section className="list">
    <img src={props.image} alt="project" />
    <p>about</p>
    <Button name="view alive" />
  </section>
)

export default ListItem
