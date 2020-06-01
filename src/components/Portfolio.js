import React from 'react'
import { Row, Col} from 'reactstrap';
const Portfolio = () => (

 
 <section className="portfoliopage">
  <h2 className="portfoliopage__title title">PORTFOLIO</h2>
    <Row className="portfoliopage__row">   
      <Col sm="12" md="6" className="portfoliopage__column_one">
          <img  width="100%" className="portfoliopage__img"  src={require('../images/artione.jpeg')}  alt='one'/>
      </Col>
      <Col sm="12" md="6" className="portfoliopage__column_two">
          <h1><b>Task App</b></h1>
         
          <p>This is a Ruby on Rails capstone required by Microverse. It’s an app for creating different groups and adding your tasks to these groups, the tasks include hours spent, which is a great tool to track and organize your time.</p>
          <p><span className="portfoliopage__skills">HTML5</span>
          <span className="portfoliopage__skills">CSS</span>
          <span className="portfoliopage__skills">Ruby on Rails</span></p>
          <div className="portfoliopage__btn-wrap">
            <a href="chubi.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
            <a href="chubi.com" target="_blank" rel="noopener noreferrer" >View Source</a>
          </div>      
      </Col>
    </Row>
    <Row className="portfoliopage__row">   
      <Col sm="12" md="6" className="portfoliopage__column_one">
          <img  width="100%" className="portfoliopage__img"  src={require('../images/artione.jpeg')}  alt='one'/>
      </Col>
      <Col sm="12" md="6" className="portfoliopage__column_two">
          <h1><b>Task App</b></h1>
         
          <p>This is a Ruby on Rails capstone required by Microverse. It’s an app for creating different groups and adding your tasks to these groups, the tasks include hours spent, which is a great tool to track and organize your time.</p>
          <p><span className="portfoliopage__skills">HTML5</span>
          <span className="portfoliopage__skills">CSS</span>
          <span className="portfoliopage__skills">Ruby on Rails</span></p>
          <div className="portfoliopage__btn-wrap">
            <a href="chubi.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
            <a href="chubi.com" target="_blank" rel="noopener noreferrer" >View Source</a>
          </div>      
      </Col>
    </Row>
  </section>



)

export default Portfolio; 