import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home'
import Blog from '../components/Blog'
import About from '../components/About'
import Portfolio from '../components/Portfolio'




const AppRouter = () => (
	  <main>
	  	<Header/>
	  	<Home/>
	  	<About/>
	  	<Portfolio/>
	  	<Blog/>
	  </main>
	) 

	export default AppRouter;