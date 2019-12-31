import React from "react"
import { MDX, Wrapper } from "gatsby-theme-monolog/src/components/Layout"
import Nav from "../../components/Nav"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <MDX>{children}</MDX>
    </Wrapper>
  )
}

export default Layout
