import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DiscoverDnDLore from './pages/DiscoverDnDLore'
import DiscoverCharsAndAdvs from './pages/DiscoverCharsAndAdvs'
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import SignedStatus from './context/signedStatusContext/signedStatusContext';


export default function Routes() {

	return (
		<BrowserRouter>
			<SignedStatus>
				<Navbar />
				<Switch> 
					<Route path="/" exact component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/discoverDnDLore" component={DiscoverDnDLore} />
					<Route path="/discoverCharsAndAdvs" component={DiscoverCharsAndAdvs} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} /> 
				</Switch>
			</SignedStatus>
		</BrowserRouter>
	);
}