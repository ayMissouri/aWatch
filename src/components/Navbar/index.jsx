// import React from "react";
// import {
//   Nav,
//   NavContainer,
//   NavLogo,
//   NavMenu,
//   NavItem,
//   NavLink,
//   NavIcon,
// } from "./NavbarElements";
// import { useState } from "react";

// const Navbar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <Nav>
//         <NavContainer>
//           <NavLogo>
//             <img src="./awatch.png" height="60px" />
//           </NavLogo>

//           <NavMenu>
//             <NavItem>
//               <NavLink to="/" onClick={handleClick}>
//                 Home
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/discover" onClick={handleClick}>
//                 Discover
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/about" onClick={handleClick}>
//                 About
//               </NavLink>
//             </NavItem>
//           </NavMenu>
//           <NavIcon>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}>test</i>
//           </NavIcon>
//         </NavContainer>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="./awatch.png" alt="awatch logo" width="200px" />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/discover"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Discover
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}>test</i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
