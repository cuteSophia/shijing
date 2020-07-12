import React from "react"

export default () => {
  return (
    <footer className="footer flex">
      <span className="copyright">© {new Date().getFullYear()}, Shi Jing</span>
      <nav className="flex">
        <a
          href="mailto:sophia.jingshi@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go To Footer Link: Contact Me"
        >
          Contact Me
        </a>
        <a
          href="mailto:sophia.jingshi@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go To Footer Link: Contact Me"
        >
          Else
        </a>
      </nav>
    </footer>
  )
}
