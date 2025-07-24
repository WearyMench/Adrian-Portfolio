import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(10, 10, 10, 0.95);
    border-bottom-color: rgba(0, 234, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 60px;
    gap: 16px;
  }
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #00eaff 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #a0a0a0;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  .nav-link-content {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;

    svg {
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    color: #ffffff;

    .nav-link-content {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);

      svg {
        color: #00eaff;
      }
    }
  }

  &.active {
    color: #00eaff;

    .nav-link-content {
      background: rgba(0, 234, 255, 0.1);
      border: 1px solid rgba(0, 234, 255, 0.2);

      svg {
        color: #00eaff;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: linear-gradient(135deg, #00eaff 0%, #0099cc 100%);
      border-radius: 1px;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #00eaff;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    display: flex;
  }

  a {
    text-decoration: none;
    color: #a0a0a0;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 12px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 12px;

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 12px;

      svg {
        font-size: 1rem;
        transition: all 0.3s ease;
      }
    }

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);

      .mobile-nav-link svg {
        color: #00eaff;
      }
    }

    &.active {
      color: #00eaff;
      background: rgba(0, 234, 255, 0.1);
      border: 1px solid rgba(0, 234, 255, 0.2);

      .mobile-nav-link svg {
        color: #00eaff;
      }
    }
  }

  .mobile-language-toggle {
    padding: 16px 20px;
    display: flex;
    justify-content: center;
  }
`;
