import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DiscoverDnDLore from './pages/DiscoverDnDLore'
import DiscoverCharsAndAdvs from './pages/DiscoverCharsAndAdvs'
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

export default function Routes(props) {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch> 
				<Route path="/" exact component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/discoverDnDLore" component={DiscoverDnDLore} />
				<Route path="/discoverCharsAndAdvs" component={DiscoverCharsAndAdvs} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}