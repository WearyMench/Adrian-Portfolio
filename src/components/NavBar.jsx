import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaCode, FaUser } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileMenu,
} from "./NavBar.styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar scroll a sección About cuando se navega desde otra página
  useEffect(() => {
    if (window.location.hash === "#about") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    closeMenu();

    // Si estamos en la página Home, hacer scroll suave
    if (window.location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a Home y luego hacer scroll
      window.location.href = "/#about";
    }
  };

  const navItems = [
    { name: "Inicio", path: "/", icon: <FaHome /> },
    {
      name: "Sobre mí",
      path: "/#about",
      icon: <FaUser />,
      onClick: handleAboutClick,
    },
    { name: "Proyectos", path: "/works", icon: <FaCode /> },
  ];

  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <NavContainer>
        <NavLogo to="/">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="logo-text"
          >
            Adrian Mirabal
          </motion.span>
        </NavLogo>

        <NavMenu>
          {navItems.map((item, index) => (
            <NavItem key={item.name}>
              <NavLink
                to={item.path}
                onClick={item.onClick || closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="nav-link-content"
                >
                  {item.icon}
                  {item.name}
                </motion.span>
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

        <MobileMenuButton onClick={toggleMenu}>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  onClick={item.onClick || closeMenu}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span className="mobile-nav-link">
                    {item.icon}
                    {item.name}
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default NavBar;
