import React from 'react';
import { Row, Col} from 'reactstrap';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';




const Portfolio = () => (

 
 <section className="portfoliopage" id="portfolio">
  <h2 className="portfoliopage__title title">PORTFOLIO</h2>
    <Row className="portfoliopage__row">   
      <Col sm="12" md="6" className="portfoliopage__column_one">
          <img  width="100%" className="portfoliopage__img"  src={require('../images/artione.jpeg')}  alt='one'/>
      </Col>
      <Col sm="12" md="6" className="portfoliopage__column_two">
        <OverPack  always={false} playScale={0.4} >
          <QueueAnim key="1" leaveReverse   delay={600}  ease={['easeOutQuart', 'easeInOutQuart']}>
          <h1 key="0"><b>Task App</b></h1>
         
          <p key="1">This is a Ruby on Rails capstone required by Microverse. It’s an app for creating different groups and adding your tasks to these groups, the tasks include hours spent, which is a great tool to track and organize your time.</p>
          <p key="2"><span className="portfoliopage__skills">HTML5</span>
          <span className="portfoliopage__skills">CSS</span>
          <span className="portfoliopage__skills">Ruby on Rails</span></p>
          <div key="3" className="portfoliopage__btn-wrap">
            <button><a href="chubi.com" target="_blank" rel="noopener noreferrer" >Live Demo</a></button>
            <button><a href="chubi.com" target="_blank" rel="noopener noreferrer" >View Source</a></button>
          </div>  
                  </QueueAnim>
       
          </OverPack>    
      </Col>
    </Row>
  </section>



)

export default Portfolio; 