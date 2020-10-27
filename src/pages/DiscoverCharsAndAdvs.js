import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../services/api'


export default function DiscoverCharsAndAdvs() {
	const [charsAndAdvs, setData] = useState(null)
	useEffect(() => {
		try {
			api.get('/discoverCharsAndAdvs').then(response => setData(response.data))
		} catch (error) {
				console.log(error)
			}
	},[])	

	return (
		<section id="discoverCharsAndAdvs">
			<h1>DiscoverCharsAndAdvs</h1>
			<Link to='/'>Home</Link>
			{
				charsAndAdvs !== null 
				? <><p>
					{charsAndAdvs[0].length > 0 ? charsAndAdvs[0].map(char =><>
																			<hr/>
																			<li>Name: {char.charname}</li>
																			<li>History: {char.charhistory}</li>
																			<li>Id: {char.id}</li>
																			<hr/>
																			</>
																		): null}
					</p>
					<p>
					{charsAndAdvs[1].length > 0 ? charsAndAdvs[1].map(quest =>	<>
																					<hr/>
																					<li>{quest.questname}</li>
																					<li>{quest.quest}</li>
																					<li>{quest.id}</li>
																					<hr/>
																				</>
																		) : null}
					</p></>
				:null
			}
			
		</section>
	)
}