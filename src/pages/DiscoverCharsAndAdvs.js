import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function DiscoverCharsAndAdvs() {
	const [charsAndAdvs, setData] = useState(null)

	let charsAndQuests =  JSON.parse(localStorage.getItem('charsAndQuests'))

	if(charsAndQuests === null) {
		console.log('no charsAndQuests in local storage')
	} else if(charsAndAdvs === null) {
		setData(charsAndQuests)
	} 

	useEffect(() => {
		if(charsAndQuests === null){
			try {
				api.get('/discoverCharsAndAdvs')
				.then(response => {
					localStorage.setItem('charsAndQuests',JSON.stringify(response.data))
					setData(response.data)
				})
			} catch (error) {
					console.log(error)
				}
		} else {return}
	},[charsAndQuests])	

	return (
		<section id="discoverCharsAndAdvs">
			<h1>Discover Chars And Advs</h1>
			{
				charsAndAdvs !== null 
				? <>
				<h3>Chars</h3>
				<ul>
					{
						charsAndAdvs[0].length > 0 &&
							charsAndAdvs[0].map(char =>
								<li>
									<p>Name: {char.charname}</p>
									<p>History: {char.charhistory}</p>
									<p>UserId: {char.id}</p>
								</li>
							)
					}
				</ul>
				<h3>Quests</h3>
				<ul>
					{
						charsAndAdvs[1].length > 0 &&
							charsAndAdvs[1].map(quest =>
								<li>
									<p>{quest.questname}</p>
									<p>{quest.quest}</p>
									<p>{quest.id}</p>
								</li>
							) 
					}
				</ul>
				</>
				: <h2>Getting chars and quests from the database! Will be here in a moment!</h2>
			}
		</section>
	)
}