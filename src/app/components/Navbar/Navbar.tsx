import { Link } from "react-router-dom";
import Styled from "styled-components";
import menuIcon from "../../assets/icons/menu-icon.svg";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Adedimola</Logo>
      <MenuIcon src={menuIcon} alt="" />
      <LinkFlex>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </LinkFlex>
    </Nav>
  );
};

export default Navbar;

const Logo = Styled.h1`
  color: #ffab00;
  font-family: "Kaushan Script", cursive;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
const Nav = Styled.nav`
display: grid;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 660px) {
  display: flex;
  flex-direction: row;
    margin: 40px auto;
    align-items: center;
    justify-content: space-between;
  }
`;
const MenuIcon = Styled.img`
  cursor: pointer;
  display: none;

  @media screen and (min-width: 660px) {
    display: none;
  }
`;
const LinkFlex = Styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 660px) {
    gap: 20px;
  }
`;
const NavLink = Styled(Link)`
  color: #fff;
  padding: 15px 0;
  position: relative;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #fff;
    text-decoration: none;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffab00;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:active {
        color: #fff;
        text-decoration: none;

        &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: '';
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: #ffab00;
            width: 30px;
        }
    }
`;
