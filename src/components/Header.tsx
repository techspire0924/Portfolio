import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(10px);
  color: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  padding: 0.7rem 0;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.3rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 1.13rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.1rem 0.2rem 0.1rem;
  background: transparent;
  border-bottom: 2.5px solid transparent;
  transition: color 0.18s, border-bottom 0.18s, background 0.18s;
  &.active {
    color: #00adee;
    border-bottom: 2.5px solid #00adee;
    background: rgba(0,173,238,0.07);
    border-radius: 4px 4px 0 0;
    text-decoration: none;
  }
  &:hover {
    color: #ff7e5f;
    border-bottom: 2.5px solid #ff7e5f;
    background: rgba(255,126,95,0.08);
    text-decoration: none;
  }
`;

const Header: React.FC = () => (
  <HeaderBar>
    <nav>
      <NavList>
        <li><StyledNavLink to="/" end>Home</StyledNavLink></li>
        <li><StyledNavLink to="/about">About</StyledNavLink></li>
        <li><StyledNavLink to="/skills">Skills</StyledNavLink></li>
        <li><StyledNavLink to="/projects">Professional Experience</StyledNavLink></li>
        <li><StyledNavLink to="/chat">Chat with Me</StyledNavLink></li>
        <li><StyledNavLink to="/contact">Contact</StyledNavLink></li>
      </NavList>
    </nav>
  </HeaderBar>
);

export default Header;
