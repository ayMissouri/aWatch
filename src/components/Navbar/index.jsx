import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import styled from "styled-components";

const SearchBar = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    /* background: crimson; */
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    /* box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4); */
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 12px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all 0.5s;
    }
  }
  @media screen and (max-width: 1210px) {
    display: none;
  }
`;

const Search = styled.input`
  font-family: "Inconsolata", monospace;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 35px;
  outline: none;
  border: none;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: #00000040;
  color: white;
  text-shadow: 0 0 10px crimson;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  /* box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2); */
  // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    width: 150px;
    opacity: 1;
    cursor: text;
  }
  &:focus ~ .search {
    /* right: -450px; */
    /* background: #151515; */
    z-index: 6;
    display: none;
    /* &::before {
      top: 0;
      left: 0;
      width: 25px;
    } */
    /* &::after {
      top: 0;
      left: 0;
      width: 25px;
      height: 2px;
      border: none;
      background: white;
      border-radius: 0%;
      transform: rotate(-45deg);
    } */
  }
  &::placeholder {
    color: white;
    opacity: 0.5;
    font-weight: bolder;
  }
`;

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src="/awatch.png" alt="awatch logo" className="navlogo" />
          </NavLink>

          <SearchBar>
            <Search type="text" placeholder="Search..."></Search>
            <div class="search"></div>
          </SearchBar>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/discover"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Discover
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
