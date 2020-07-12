import React from "react"
import Nav from "./nav"
import Footer from "./footer"

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
      <Nav location={location} />
      {location.pathname === rootPath ? (
        <>{children}</>
      ) : (
        <main>{children}</main>
      )}
      <Footer />
    </>
  )
}
