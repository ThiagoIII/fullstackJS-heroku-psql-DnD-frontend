import React , { useState} from 'react'
import api from '../services/api'
import '../styles/home.css'

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

	return	(
			<section id="home">
				<h1>Welcome to Dungeons, Dragons and Magic!</h1>
				<button onClick={() => handleGetData()}>Show some data</button>
				<ul>
					{
					data != null 
						? data.map(user => <li>{user.name} , {user.email} , {user.hash}, {user.joined}</li>) 
						: null
					}
				</ul>
				
			</section>)
}