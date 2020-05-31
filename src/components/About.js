import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
const About = () => (

	<section className="aboutpage" id="about">
		<h2 className="aboutpage__title title">ABOUT ME</h2>
		<div className="aboutpage__container">
		 <div className="aboutpage__wrapone"> <img  className="aboutpage__img"  src={require('../images/one.svg')}  alt='one'/></div>
		 <div className="aboutpage__wraptwo">
			<p className='aboutpage__one'>I'M Chubi Adama</p> 
			<p className='aboutpage__two'>A Full-Stack Developer, currently based in Abuja, Nigeria. I'm passionate about creating scalable web experience for next generation users. </p>
			<ListGroup>
		      <ListGroupItem><b>Current Job:</b> Technical Support Engineer, Microverse</ListGroupItem>
		      <ListGroupItem><b>Skills:</b> JavaScript (ES5/ES6), Ruby, HTML, CSS, Ruby on Rails, TDD, jQuery, Bootstrap, PostgreSQL, SQLite3, Rspec, Capybara, Git, GitHub, Heroku, React, Webpack, SASS/SCSS </ListGroupItem>
		      <ListGroupItem><b>Interests:</b> Cooking, Reading, Tennis</ListGroupItem>
		      <ListGroupItem><b>Education:</b> B.sc Economics, B.sc Peace Studies & Conflict Resolution, Cert. Full-Stack Development</ListGroupItem>
		      <ListGroupItem><b>Plans:</b> Looking for my next full-time software developer role. I'm also looking forward to learning new technologies and deepening my knowledge of my current skills.</ListGroupItem>
    		</ListGroup>
		 </div>
			
		</div>
	</section>

)

export default About;