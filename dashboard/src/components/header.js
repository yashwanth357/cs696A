

import React from 'react';
import { Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { FaBell, FaUser , FaCircle } from 'react-icons/fa'; // Importing the necessary icons

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='nav1'>
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <NavDropdown title={<FaBell />} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Notification 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Notification 2</NavDropdown.Item>
      </NavDropdown>
      <br/>
      <br/>
      <NavDropdown title={<FaUser  /> } id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3">Profile</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title={ <FaCircle />} id="basic-nav-dropdown">

      <NavDropdown.Item href="#action/4">Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default Header;