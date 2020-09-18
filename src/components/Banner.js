import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Banner = () => (

  <section className="bannerpage">
    <Container>
      <Row>
        <Col sm="12" md="6"><b>I'm extremely passionate about software development in all it's forms </b></Col>
        <Col sm="12" md="6"><button className="bannerpage__button"><a href="#contact">GET IN TOUCH!</a></button></Col>
      </Row>
    </Container>
  </section>

);

export default Banner;
