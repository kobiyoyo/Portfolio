import React from 'react';
import { Row, Col } from 'reactstrap';
import Typewriter from 'typewriter-effect';

const Home = () => (
  <section className="homepage" id="home">
    <div className="homepage__container">


      <Row className="homepage__three">
        <Col sm="12" md="6">
          <p className="homepage__one">Hello,my name is</p>
          <p className="homepage__two">Chubi Adama</p>
          <Typewriter
            onInit={typewriter => {
              typewriter.typeString("<span style='font-size:37px'>Full-Stack Developer.</span>")
                .pauseFor(250)
                .deleteAll();
              typewriter.typeString("<span style='font-size:37px'>Writer.</span>")
                .pauseFor(250)
                .deleteAll();
              typewriter.typeString("<span style='font-size:37px'>Start-up Enthusiast.</span>")
                .pauseFor(250)
                .start();
            }}
          />

          <div className="homepage__four"><button className="homepage__button"><a href="#portfolio">See Projects</a></button></div>

        </Col>
        <Col sm="12" md="6" className="homepage__links">
          <Row>
          <Col>
            <a href="https://www.linkedin.com/in/chubiyojo-adama/" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/1.svg')} alt="linkedin social media icon" /></a>
          </Col>
          <Col>
            <a href="https://github.com/kobiyoyo" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/2.svg')} alt="github social media icon" /></a>
          </Col>
          <Col>
            <a href="https://twitter.com/_kobiyoyo" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/3.svg')} alt="twitter media icon" /></a>
          </Col>
          </Row>
        </Col>
      </Row>

    </div>
  </section>

);

export default Home;
