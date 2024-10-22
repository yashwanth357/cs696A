import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import MainContent from './components/maincontent';
import Footer from './components/footer';
import { Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Container>
          <Row>
            <MainContent />
          </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
  );
};

export default App;