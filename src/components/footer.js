import React from "react"

export default () => {
  return (
    <footer className="footer flex">
      <span className="copyright">
        © Shi Jing {new Date().getFullYear()} Built with ❤️ using{" "}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Gatsby</a>
      </span>
      <nav className="flex">
        <a
          href="mailto:sophia.jingshi@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go To Footer Link: Contact Me"
        >
          Contact Me
        </a>
      </nav>
    </footer>
  )
}
