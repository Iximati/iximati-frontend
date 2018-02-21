import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Index from './components/Index/Index';
import Login from './components/Index/Login';
import Inicio from './components/publicador/Inicio.js';
import Signup from './components/publicador/Signup.js';


const AppRoutes = () =>

	<App>
		<Switch>
			<Route exact path='/' component= { Index } />
			<Route exact path='/login' component= { Login } />
			<Route exact path='/inicio' component= { Inicio } />
			<Route exact path='/signup' component= { Signup } />
		</Switch>
	</App>

export default AppRoutes;