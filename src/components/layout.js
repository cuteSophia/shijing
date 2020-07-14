import React, { useMemo } from "react"
import Nav from "./nav"
import Footer from "./footer"

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pathname = location.pathname

  const isMarkdown = useMemo(() => {
    return pathname === "/blog" ? false : true
  }, [pathname])

  return (
    <>
      <Nav location={location} />
      {pathname === rootPath ? (
        <>{children}</>
      ) : (
        <main className={isMarkdown ? `markdown` : ``}>{children}</main>
      )}
      <Footer />
    </>
  )
}
