import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    #c70a4629,
    #a000eb29 48.44%,
    #00a57d29
  );
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: space-around;
  z-index: 99;
  text-shadow: 0 2px 4px rgb(0, 0, 0);
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 10px;
  color: ${(props) => (props.active ? "blue" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
`;

const Search = () => {
  const navItems = [
    { id: 1, label: "🏠", active: true, link: "/" },
    { id: 2, label: "🔍", active: true, link: "/discover" },
    { id: 3, label: "❓", active: true, link: "/about" },
  ];

  return (
    <NavbarContainer>
      {navItems.map((item) => (
        <NavLink className="navItem" key={item.id} to={item.link}>
          {item.label}
        </NavLink>
      ))}
    </NavbarContainer>
  );
};

export default Search;
