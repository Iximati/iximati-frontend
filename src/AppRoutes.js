import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Index from './components/Index/Index';
import Login from './components/Index/Login';
import Publicador from './components/publicador/Inicio';


const AppRoutes = () =>

	<App>
		<Switch>
			<Route exact path='/' component= { Index } />
			<Route exact path='/login' component= { Login } />
			<Route exact path='/inicio' component= { Publicador } />
		</Switch>
	</App>

export default AppRoutes;