import React from "react"
import ListItem from "./ListItem"
import square from "./square.jpg"

const data = {
  development: [
    {
      image: square,
      title: "React Data Visualization",
      stack: "React, Redux, Victory, Node, Express, Firebase, Enzyme",
      about: "project detail here",
      roles: " web development",
      buttons: [
        {
          name: "view alive",
          link: "https://bridge-data-viz.firebaseapp.com/",
        },
        {
          name: "view on Github",
          link: "https://github.com/bridge-school/data-viz-frontend",
        },
      ],
    },
    {
      image: square,
      title: "Title",
      stack: "React",
      about: "project detail here",
      roles: " web development",
      buttons: [
        {
          name: "view alive",
          link: "",
        },
      ],
    },
  ],
}

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
