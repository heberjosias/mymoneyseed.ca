import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <main>{children}</main>
      <footer>        
        <p>© {new Date().getFullYear()} My Money Seed</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
