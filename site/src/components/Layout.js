import React from "react"
import {
  Wrapper as ThemeWrapper,
  Content as ThemeContent,
} from "gatsby-theme-monolog/src/components/Layout"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <ThemeWrapper>
      <Nav />
      <ThemeContent>{children}</ThemeContent>
    </ThemeWrapper>
  )
}

export default Layout
