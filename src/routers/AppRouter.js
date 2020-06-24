import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home'
import Blog from '../components/Blog'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Banner from '../components/Banner'
import Footer from '../components/Footer'



const AppRouter = () => (
	  <main>
	  	<Header/>
	  	<Home/>
	  	<About/>
	  	<Banner/>
	  	<Portfolio/>
	  	<Blog/>
	  	<Contact/>
	  	<Footer/>
	  </main>
	) 

	export default AppRouter;