import React,{useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md" className="main-nav">
        <NavbarBrand href="/">Chubi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navi-links" href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navi-links" href="/project">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navi-links" href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navi-links" href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;