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
		const resultsFetched = await fetch(`https://www.dnd5eapi.co/api/${dndopt}`)
		const { results } = await resultsFetched.json()
		const statusResponse = resultsFetched.status;
		if(statusResponse === 200){
			if(dndopt === 'ability-scores') {
				setDnD({...dndOpts, abilityScores: results})
				return
			} else {
				setDnD({...dndOpts, [dndOptions.find(opts => opts === dndopt)]: results})
				return
			}
		} else {
			return
		}
		
	}
		

	return (
			<section id="dndLore" data-testid="sectionTest">
				<h1>Discover DnD Lore</h1>
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
											? <ul data-item={item}>{dndOpts[item].map(data => <li>{data.name}</li>)}</ul>
											: null 
								}
							</>
						)
					}
				</ul>
			</section>
	)
}