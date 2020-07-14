import React, { useEffect, useCallback, useState } from "react"
import { Link } from "gatsby"
import Avatar from "../../content/assets/avatar.png"

export default ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pathname = location.pathname

  const [navbarHome, setNavbarHome] = useState(true)

  const handleScroll = useCallback(() => {
    const windowHeight = document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop
    setNavbarHome(scrollTop < windowHeight ? true : false)
  }, [])

  useEffect(() => {
    if (pathname === rootPath) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (pathname === rootPath) {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [pathname, rootPath, handleScroll])

  return (
    <nav
      className={`navbar flex ${
        pathname === rootPath && navbarHome ? `navbar-home` : ``
      }`}
    >
      <Link to="/" className="brand flex">
        <img src={Avatar} alt="ShiJing" className="avatar" />
        <span>Shi Jing</span>
      </Link>
      <div className="list">
        <Link to="/about">ABOUT</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/hello-world/">GUIDES</Link>
      </div>
    </nav>
  )
}
