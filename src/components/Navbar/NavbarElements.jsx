import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #2121214d;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  &.active {
    color: #427bf5;
    text-decoration: underline #427bf5;
  }
  @media screen and (max-width: 960px) {
    padding: 1.5rem;
    width: 100%;
    display: table;
  }
`;

export const NavContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  max-width: 1500px;
`;

export const NavLogo = styled(Link)`
  color: #c70a46;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  font-size: 2rem;
  flex-grow: 1;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1pxsolid #fff;
    position: absolute;
    top: 80px;
    left: -110%;
    opacity: 1;
    transition: all 0.5s ease;
    &.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  }
`;

export const NavItem = styled.li`
  line-height: 40px;
  margin-right: 1rem;
  @media screen and (max-width: 960px) {
    &.active {
      color: #ffdd40;
      border: none;
    }
  }
`;

export const NavIcon = styled.div`
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffdd40;
  }
`;
