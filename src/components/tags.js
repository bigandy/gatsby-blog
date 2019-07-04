import React from "react"

class Tags extends React.Component {
  render() {
    const tags = this.props.tags

    return (
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li
          style={{
            marginRight: "0.5rem",
          }}
        >
          Tags:{" "}
        </li>
        {tags.map((tag, i) => {
          return (
            <li
              key={i}
              style={{
                marginRight: "0.5rem",
              }}
            >
              {tag}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Tags
