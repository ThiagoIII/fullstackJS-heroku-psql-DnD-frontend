import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DiscoverDnDLore from './pages/DiscoverDnDLore'
import DiscoverCharsAndAdvs from './pages/DiscoverCharsAndAdvs'
import Dashboard from './pages/Dashboard';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch> 
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/discoverDnDLore" component={DiscoverDnDLore} />
				<Route path="/discoverCharsAndAdvs" component={DiscoverCharsAndAdvs} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}