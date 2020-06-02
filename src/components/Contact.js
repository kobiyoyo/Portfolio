import React from  'react'
import { Col, Row, Button, Form, FormGroup,Input  } from 'reactstrap';
import emailjs from 'emailjs-com';

function ContactUs(){
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_tIpDmbRz', e.target, 'user_X7yC2PhbluPu1VZDI7Glb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Email Sent');
  }



  return (
 <section className="contactpage">  
  <h2 className="contactpage__title title">CONTACT</h2> 
<Row>
<Col sm="12" md="6"></Col>
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
       
        <Input type="textarea" name="message" id="textarea" placeholder="Message"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Col>
</Row>
</section>
  );

}

export default ContactUs;