import React from 'react';
import Typewriter from 'typewriter-effect';
const Home = () => (
	<section className="homepage" id="home">
		<div className="homepage__container">
			<p className='homepage__one'>Hello,my name is</p> 
			<p className='homepage__two'>Chubi Adama</p>
			<div className='homepage__three'>
			<Typewriter
 		 		onInit={(typewriter) => {
    			typewriter.typeString("<span style='font-size:37px'>Full-Stack Developer.</span>")
      			.pauseFor(250)
      			.deleteAll()
      			typewriter.typeString("<span style='font-size:37px'>Writer.</span>")
      			.pauseFor(250)
      			.deleteAll()
      			typewriter.typeString("<span style='font-size:37px'>Start-up Enthusiast.</span>")
      			.pauseFor(250)
      			.start();
  }}
/>
			</div>
			<div className='homepage__four'><button className='homepage__button' ><a  href="#portfolio">See Projects</a></button></div>
		</div>
	</section>

	)

export default Home;