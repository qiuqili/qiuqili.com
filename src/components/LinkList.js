import React from "react"
import ListItem from "./ListItem"
import data from "../data.json"

const LinkList = props => (
  <main>
    {data.development.map(item => (
      <ListItem
        image={item.image}
        title={item.title}
        about={item.about}
        stack={item.stack}
        roles={item.roles}
        buttons={item.buttons}
      />
    ))}
  </main>
)

export default LinkList
