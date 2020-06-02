import React from 'react'
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';



const About = () => (

	<section className="aboutpage" id="about">
		<h2 className="aboutpage__title title">ABOUT ME</h2>
		<div className="aboutpage__container">
		 <div className="aboutpage__wrapone"> <img  className="aboutpage__img"  src={require('../images/one.svg')}  alt='one'/></div>
		 <div className="aboutpage__wraptwo">
		 	<OverPack style={{ height: 350 }} always={false} playScale={0.4} >
				
						<QueueAnim key="1"
			          		leaveReverse   delay={400}  ease={['easeOutQuart', 'easeInOutQuart']} className="aboutpage__list">
			          	
							<p key="0" className='aboutpage__one'>I'M Chubi Adama</p> 
							<p key="1" className='aboutpage__two'>A Full-Stack Developer, currently based in Abuja, Nigeria. I'm passionate about creating scalable web experience for next generation users. </p>
			
						     <div key="2"><b>Current Job:</b> Technical Support Engineer, Microverse</div>
						     <div key="3"><b>Skills:</b> JavaScript (ES5/ES6), Ruby, HTML, CSS, Ruby on Rails, TDD, jQuery, Bootstrap, PostgreSQL, SQLite3, Rspec, Capybara, Git, GitHub, Heroku, React, Webpack, SASS/SCSS </div>
						     <div key="4"><b>Interests:</b> Cooking, Reading, Tennis</div>
						     <div key="5"><b>Education:</b> B.sc Economics, B.sc Peace Studies & Conflict Resolution, Cert. Full-Stack Development</div>
						     <div key="6"><b>Plans:</b> Looking for my next full-time software developer role. I'm also looking forward to learning new technologies and deepening my knowledge of my current skills.</div>
				    
			    		</QueueAnim>
			     
			    </OverPack>
	
		 	 </div>
			
		</div>
	</section>

)

export default About;