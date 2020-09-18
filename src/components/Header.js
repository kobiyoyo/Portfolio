import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-scroll';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md" className="main-nav fixed-top">
        <NavbarBrand href="/"><img src={require('../images/hand.png')} alt="one" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto homenav" navbar>
            <NavItem>
              <Link activeClass="active" spy smooth offset={10} duration={2000} className="navi-links" to="home">Home</Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" spy smooth offset={10} duration={2000} className="navi-links" to="about">About</Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" spy smooth duration={2000} className="navi-links" to="portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" spy smooth duration={2000} className="navi-links" to="blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" spy smooth duration={2000} className="navi-links" to="contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
