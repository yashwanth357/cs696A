import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { FaHome, FaUsers, FaChartBar, FaShoppingCart, FaBell } from 'react-icons/fa';

import users from './users';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home"><FaHome /> Home</Nav.Link>
            <Nav.Link href="/users"><FaUsers /> Users</Nav.Link>
            
            <Nav.Link href="/analytics"><FaChartBar /> Analytics</Nav.Link>
            <Nav.Link href="/orders"><FaShoppingCart /> Orders</Nav.Link>
            <Nav.Link href="/notifications"><FaBell /> Notifications</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;