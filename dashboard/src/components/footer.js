import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Copyright 2024. All rights reserved.</p>
        </Col>
        <Col>
          <p>
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;