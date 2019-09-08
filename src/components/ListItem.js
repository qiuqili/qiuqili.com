import React from "react"
import Button from "./Button"

const ListItem = props => (
  <section>
    <img src={props.image} alt="project" />
    <div>
      <h1>{props.title}</h1>
      <h4>{props.stack} </h4>
      <p>{props.about}</p>
      <p>{props.roles}</p>
      {props.buttons.map(button => (
        <Button name={button.name} link={button.link} />
      ))}
    </div>
  </section>
)

export default ListItem
