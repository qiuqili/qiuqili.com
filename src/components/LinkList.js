import React from "react"
import ListItem from "./ListItem"
import data from "../data.json"

const LinkList = props => (
  <main>
    {data.development.map(item => (
      <ListItem {...item} />
    ))}
  </main>
)

export default LinkList
