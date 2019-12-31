import React from "react"

const NavItem = ({ text, link }) => (
  <li className="list-none mr-6">
    <a className="text-beta text-shadow-beta" href={link}>
      {text}
    </a>
  </li>
)

const Nav = () => {
  return (
    <nav className="mb-5" role="navigation">
      <ul className="flex flex-wrap">
        <NavItem text="One" link="#" />
        <NavItem text="Two" link="#" />
        <NavItem text="Three" link="#" />
        <NavItem text="Four" link="#" />
      </ul>
    </nav>
  )
}

export default Nav
