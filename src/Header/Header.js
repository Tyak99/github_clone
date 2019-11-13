import React from "react";
import "./header.css";
import { Navbar, NavbarBrand } from "reactstrap";
const Header = () => {
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/" style={{color: 'white'}}>Github Clone</NavbarBrand>
    </Navbar>
  );
};

export default Header;
