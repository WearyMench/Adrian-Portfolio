import {
  NavbarNavLink,
  NavbarA,
  Navi,
  ButtonNv,
  ExtendedNavbarA,
  ExtendedNavbarNavLink,
  NavBarUL,
  ExtendedNavBarUL,
} from "./NavBar.styles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "animate.css";

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  return (
    <Navi id="nav" extend={extendNavbar}>
      <NavBarUL extend={extendNavbar}>
        <li>
          <NavbarNavLink to="/">Home</NavbarNavLink>
        </li>
        <li>
          <NavbarA href="/#about">About</NavbarA>
        </li>
        <li>
          <NavbarA href="/#skills">Skills</NavbarA>
        </li>
        <li>
          <NavbarNavLink to="/works">Works</NavbarNavLink>
        </li>
        <li>
          <NavbarNavLink to="/contact">Contact</NavbarNavLink>
        </li>
        <ButtonNv
          extendNavbar={extendNavbar}
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </ButtonNv>
      </NavBarUL>
      {extendNavbar && (
        <ExtendedNavBarUL className="animate__animated animate__fadeInDown">
          <li>
            <ExtendedNavbarNavLink to="/">Home</ExtendedNavbarNavLink>
          </li>
          <li>
            <ExtendedNavbarA href="/#about">About</ExtendedNavbarA>
          </li>
          <li>
            <ExtendedNavbarA href="/#skills">Skills</ExtendedNavbarA>
          </li>
          <li>
            <ExtendedNavbarNavLink to="/works">Works</ExtendedNavbarNavLink>
          </li>
          <li>
            <ExtendedNavbarNavLink to="/contact">Contact</ExtendedNavbarNavLink>
          </li>
        </ExtendedNavBarUL>
      )}
    </Navi>
  );
}

export default NavBar;
