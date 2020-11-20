import React, { useEffect, useState } from 'react'

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
			<h1>Discover Chars And Advs</h1>
			<input id="searchCQ" type="search" name="search" placeholder="Type here your char or quest"></input>
			<button type="button" name="search">Search</button>
			{
				charsAndAdvs !== null 
				? <><h3>Chars</h3>
				<ul>
					{charsAndAdvs[0].length > 0 ? charsAndAdvs[0].map(char =><>
																			<li>Name: {char.charname}</li>
																			<li>History: {char.charhistory}</li>
																			<li>Id: {char.id}</li>
																			</>
																		): null}
																		</ul>
					<h3>Quests</h3>
					<ul>
					{charsAndAdvs[1].length > 0 ? charsAndAdvs[1].map(quest =>	<>
																					<li>{quest.questname}</li>
																					<li>{quest.quest}</li>
																					<li>{quest.id}</li>
																				</>
																		) : null}
																		</ul>
					</>
				: <h2>Getting chars and quests from the database! Will be here in a moment!</h2>
			}
			
		</section>
	)
}