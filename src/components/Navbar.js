import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

const Navbar = () => {
	const [isSignedIn, setSignedStatus] = useState(true)

	return (
			<ul id="navbar">
				<li><Link exact='true' to='/'>Home</Link></li>
				{
					isSignedIn
					? <>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/register'>Register</Link></li>
					</>
					: <li><Link to='/dashboard'>Dashboard</Link></li>
				}
				<li><Link to='/discoverCharsAndAdvs'>Chars and Quests!</Link></li>
				<li><Link to='/discoverDnDLore'>D&D Info</Link></li>
			</ul>
	)
}



export default Navbar
