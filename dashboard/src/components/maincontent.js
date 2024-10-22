import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MainContent = () => {
  const data = [
    { name: 'Jan', users: 4000 },
    { name: 'Feb', users: 3000 },
    { name: 'Mar', users: 2000 },
    { name: 'Apr', users: 2780 },
    { name: 'May', users: 1890 },
  ];

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>Total Users: 5000</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>Revenue: $200,000</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>Orders: 1500</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>Conversion Rate: 2.5%</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Recent Activity</h5>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yash</td>
                <td>Logged in</td>
                <td>2024-18-10</td>
              </tr>
              <tr>
                <td>Yash</td>
                <td>Made a purchase</td>
                <td>2024-20-10</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Performance Metrics</h5>
          <ProgressBar now={60} label={`60%`} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;