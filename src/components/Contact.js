import React from  'react'
import { Col, Row, Button, Form, FormGroup,Input  } from 'reactstrap';
import emailjs from 'emailjs-com';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

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
 <section className="contactpage" id="contact">  
  <h2 className="contactpage__title title">CONTACT</h2> 
<Row>
<Col sm="12" md="6">
      <OverPack style={{ height: 350 }} always={false} playScale={0.4} >
        
            <QueueAnim key="1"
                    leaveReverse   delay={400}  ease={['easeOutQuart', 'easeInOutQuart']} className="aboutpage__list">
                  
                 <div key="2"><b>Email:</b> adamachubi@gmail.com</div>
                 <div key="3"><b>Phone No:</b> +2348034194700 </div>
                 <div key="4"><b>Interests:</b><a href="twitter"><img src="require()" /></a></div>
         
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