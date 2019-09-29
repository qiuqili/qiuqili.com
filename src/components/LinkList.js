import React from "react"
import ListItem from "./ListItem"
import data from "../data.json"

const LinkList = ({ type }) => (
  <main>
    {data[type].map(item => (
      <ListItem {...item} />
    ))}
  </main>
)

export default LinkList
