import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import About from '../components/About'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

const AppRouter = () => (
	<BrowserRouter>
	  <main>
	  <Header/>
	  	<Switch>
	  		<Route path='/' component={Home} exact={true} />
	  		<Route path='/about' component={About}  />
	  		<Route component={NotFound} />
	  	</Switch>
	  </main>
	</BrowserRouter>

	) 

	export default AppRouter;