import React , { useState} from 'react'
import { Link } from 'react-router-dom';
import api from '../services/api'

export default function Home() {
const [data, setData] = useState(null)

async function handleGetData(){
	try {
		const response = await api.get()
		const responseData = response.data
		setData(responseData)
	} catch (error) {
		console.log(error)
	} 
}

	return	(<>
				<h1>Home</h1>
				<button onClick={() => handleGetData()}>Show some data</button>
				<ul>
					{
					data != null 
						? data.map(user => <li>{user.name} , {user.email} , {user.hash}, {user.joined}</li>) 
						: null
					}
				</ul>
				<ul>
					<li><Link to='/login'>Login</Link></li>
					<li><Link to='/register'>Register</Link></li>
					<li><Link to='/discoverCharsAndAdvs'>discoverCharsAndAdvs</Link></li>
					<li><Link to='/discoverDnDLore'>discoverDnDLore</Link></li>
				</ul>
			</>)
}