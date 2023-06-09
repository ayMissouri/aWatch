import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/discover" activeStyle>
            Discover
          </NavLink>
          {/* <NavLink to="/movie" activeStyle>
            Movies page
          </NavLink>
          <NavLink to="/show" activeStyle>
            Show page
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
