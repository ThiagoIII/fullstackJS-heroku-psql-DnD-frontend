import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function DiscoverDnDLore() {
	const [dndOpts, setDnD] = useState({
		classes: [],
		races: [],
		abilityScores: [],
		skills: [],
		proficiencies: [],
		languages: [],
		Spells: [],
		Monsters: [],
		Equipment: []
	})


	const dndOptions = ['classes', 'races', 'ability-scores','skills', 'proficiencies', 'languages', 'Spells', 'Monsters', 'Equipment'] 

	const handleGetOpt = async (dndopt) => {
		const infoFetched = await (await fetch(`https://www.dnd5eapi.co/api/${dndopt}`)).json()
		if(dndopt === 'ability-scores'){
			dndopt = 'abilityScores'
		} 
		for (const property in dndOpts) {
			if(property === dndopt){	
				setDnD({
					...dndOpts,
					[property]: infoFetched.results
				})
				return
			}
		}
	}
		

	return (
			<>
				<h1>DiscoverDnDLore</h1>
				<Link to='/'>Home</Link>
				<ul>
					{
						dndOptions.map(item => (
							<>
								<li  onClick={() => handleGetOpt(item)}>{item}</li>
								{
									item === 'ability-scores' 
										? dndOpts.abilityScores.length > 0
											? <ul>
												{
													dndOpts.abilityScores.map(data => <li>{data.name}</li>)
												}
											</ul>
											: null 
										: dndOpts[item].length > 0 
											? <ul>
													{
														dndOpts[item].map(data => <li>{data.name}</li>)
													}
												</ul>
											: null 
								}
							</>
						))
					}
				</ul>
			</>
	)
}