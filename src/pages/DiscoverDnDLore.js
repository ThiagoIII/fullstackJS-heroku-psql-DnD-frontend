import React, { useState } from 'react'

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
		dndopt = dndopt === 'ability-scores' ? 'abilityScores' : dndopt
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
			<section id="dndLore">
				<h1>DiscoverDnDLore</h1>
				<ul>
					{
						dndOptions.map(item => 
							<>
								<li  onClick={() => handleGetOpt(item)}>{item}</li>
								{
									item === 'ability-scores' 
										? dndOpts.abilityScores.length > 0
											? <ul>{dndOpts.abilityScores.map(data => <li>{data.name}</li>)}</ul>
											: null 
										: dndOpts[item].length > 0 
											? <ul>{dndOpts[item].map(data => <li>{data.name}</li>)}</ul>
											: null 
								}
							</>
						)
					}
				</ul>
			</section>
	)
}