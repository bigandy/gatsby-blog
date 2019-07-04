import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  const pages = ["home", "about", "archive", "cv", "now"]

  const navInner = pages.map((page, index) => {
    let href
    if (page === "home") {
      href = "/"
    } else {
      href = `/${page}`
    }
    return (
      <Link
        key={index}
        to={href}
        activeStyle={{
          textDecoration: "underline",
        }}
        style={{
          marginRight: "1em",
          boxShadow: "none",
        }}
      >
        {page}
      </Link>
    )
  })

  return <nav>{navInner}</nav>
}

export default Nav
