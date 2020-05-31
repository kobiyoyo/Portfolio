import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
const About = () => (

	<section className="aboutpage" id="about">
		<h2 className="aboutpage__title title">ABOUT ME</h2>
		<div className="aboutpage__container">
		 <div className="aboutpage__wrapone"> <img  className="aboutpage__img"  src={require('../images/one.svg')}  alt='one'/></div>
		 <div className="aboutpage__wraptwo">
			<p className='aboutpage__one'>I'M Chubi Adama</p> 
			<p className='aboutpage__two'>A Full-Stack Developer, currently based in Abuja, Nigeria. I'm passionate about creating scalable web experience.</p>
			<ListGroup>
		      <ListGroupItem>Cras justo odio</ListGroupItem>
		      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
		      <ListGroupItem>Morbi leo risus</ListGroupItem>
		      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
		      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    		</ListGroup>
		 </div>
			
		</div>
	</section>

)

export default About;