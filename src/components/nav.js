import React from "react"
import { Link } from "gatsby"
import Avatar from "../../content/assets/avatar.png"

export default ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <nav
      className={`navbar flex ${
        location.pathname === rootPath ? `navbar-home` : ``
      }`}
    >
      <Link to="/" className="brand flex">
        <img src={Avatar} alt="ShiJing" className="avatar" />
        <span>Shi Jing</span>
      </Link>
      <div className="list">
        <Link to="/new-beginnings/">ABOUT</Link>
        <Link to="/my-second-post/">BLOG</Link>
        <Link to="/hello-world/">GUIDES</Link>
      </div>
    </nav>
  )
}
