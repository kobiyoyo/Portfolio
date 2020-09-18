import React from 'react';
import {
  Col, Row, Button, Form, FormGroup, Input,
} from 'reactstrap';
import emailjs from 'emailjs-com';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_tIpDmbRz', e.target, 'user_X7yC2PhbluPu1VZDI7Glb')
      .then(result => {
        console.log(result.text);
      }, error => {
        console.log(error.text);
      });
    alert('Email Sent');
  }

  return (
    <section className="contactpage" id="contact">
      <h2 className="contactpage__title title">CONTACT</h2>
      <Row>
        <Col sm="12" md="6">
          <OverPack always={false} playScale={0.4} className="contactpage__links">

            <QueueAnim
              key="1"
              leaveReverse
              delay={400}
              ease={['easeOutQuart', 'easeInOutQuart']}
              className="aboutpage__list"
            >

              <div key="2">
                <b>Email :</b>
                {' '}
                adamachubi@gmail.com
              </div>
              <div key="3">
                <b>Phone No :</b>
                {' '}
                +2348034194700
                {' '}
              </div>
              <Row key="4" className="contactpage__row">
                <Col>
                  <a href="https://www.linkedin.com/in/chubiyojo-adama/" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/linkedin.svg')} alt="linkedin social media icon" /></a>
                </Col>
                <Col>
                  <a href="https://github.com/kobiyoyo" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/github.svg')} alt="github social media icon" /></a>
                </Col>
                <Col>
                  <a href="mailto:adamachubi@gmail.com" target="_blank" rel="noopener noreferrer"><img src={require('../images/icons/email.png')} alt="mail social media icon" /></a>
                </Col>

              </Row>

            </QueueAnim>

          </OverPack>

        </Col>
        <Col sm="12" md="6">
          <Form onSubmit={sendEmail}>
            <Row form>
              <Col md={6}>
                <FormGroup>

                  <Input type="text" name="firstname" id="firstname" placeholder="First Name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>

                  <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>

              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>

            <FormGroup>

              <Input type="textarea" name="message" id="textarea" placeholder="Message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default ContactUs;
