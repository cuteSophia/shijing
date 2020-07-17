import React, { useMemo } from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pathname = location.pathname

  const isMarkdown = useMemo(() => {
    return pathname === "/blog" ? false : true
  }, [pathname])

  return (
    <>
      <Header location={location} />
      {pathname === rootPath ? (
        <>{children}</>
      ) : (
        <main className={isMarkdown ? `markdown` : ``}>{children}</main>
      )}
      <Footer />
    </>
  )
}
