import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import SideBar from "./SideBar";
import { NavData } from "../../data/navbar";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Adedimola</Logo>
      <LinkFlex>
        {NavData.map((item, i) => (
          <NavLinks to={item.path} key={i}>
            {item.title}
          </NavLinks>
        ))}
      </LinkFlex>
      <SideBar />
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
  display: flex;
  flex-direction: row;
    margin: 40px auto;
    align-items: center;
    justify-content: space-between;
`;
const LinkFlex = Styled.div`
  display: flex;
  gap: 10px;

  .active{
    border-width: 0 0 2px;
    border-style: solid;
    border-color: #ffab00;
  }

  @media screen and (max-width: 700px){
    display: none;
  }
`;

const NavLinks = Styled(NavLink)`
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
`;
