import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, MessageSquare, Feather, Smile } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <Smile className="align-middle"/> <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/work" className="lined-link"> <Briefcase /> <span> Work </span> </Link></li> 
              <li><Link to="/pricing" className="lined-link"> <MessageSquare /> <span> pricing </span> </Link></li> 
              <li><Link to="/blog" className="lined-link"> <Feather /> <span> Blog </span> </Link></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar