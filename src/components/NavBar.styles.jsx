import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navi = styled.nav`
  width: ${(props) => props.extend && "65%"};
  height: ${(props) => (props.extend ? "50vh" : "55px")};
  background-color: ${(props) => (props.extend ? "#00b2dfd1" : "#ffffff0")};
  position: absolute;
  right: 40px;
  top: 20px;

  @media (max-width: 700px) {
    right: 0px;
    top: 0px;
    transition: all 300ms;
  }

  @media (max-width: 380px) and (max-height: 680px) {
    height: ${(props) => (props.extend ? "60vh" : "55px")};
  }
`;

export const NavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: ${(props) => (props.extend ? "0px" : "30px")};

  @media (min-width: 1800px) {
    font-size: 22px;
  }
`;
export const ExtendedNavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding-left: 0px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const NavbarA = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }

  &:hover {
    text-decoration: underline #00b2df;
  }
`;
export const ExtendedNavbarNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const ExtendedNavbarA = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline #00b2df;
  }
`;

export const ButtonNv = styled.button`
  width: 70px;
  background: none;
  border: none;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 700px) {
    display: none;
  }

  .line {
    width: 70%;
    height: 4px;
    background: white;
    border-radius: 4px;
    transition: transform 0.2s ease-out;
  }

  .line:nth-child(1) {
    transform: ${(props) =>
      props.extendNavbar && "translateY(8px) rotate(45deg)"};
  }

  .line:nth-child(2) {
    opacity: ${(props) => props.extendNavbar && "0"};
  }

  .line:nth-child(3) {
    transform: ${(props) =>
      props.extendNavbar && "translateY(-8px) rotate(-45deg)"};
  }
`;
