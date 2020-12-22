import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';


export default function DiscoverDnDLore() {
	const [dndOpts, setDnD] = useState({
		classes: [],
		races: [],
		'ability-scores': [],
		skills: [],
		proficiencies: [],
		languages: [],
		Spells: [],
		Monsters: [],
		Equipment: []
	})
	

	const dndOptions = ['classes', 'races', 'ability-scores','skills', 'proficiencies', 'languages', 'Spells', 'Monsters', 'Equipment'] 

	React.useEffect(() => {
		let localResultsDnDopts = localStorage.getItem('dndOpts')
		localResultsDnDopts && setDnD(JSON.parse(localResultsDnDopts))
	}, [])
	

	const handleGetOpt = async (dndopt) => {

		const resultsFetched = await fetch(`https://www.dnd5eapi.co/api/${dndopt}`)
		const { results } = await resultsFetched.json()

		if(resultsFetched.status === 200){
			let newDnDopts = {...dndOpts, [dndOptions.find(opts => opts === dndopt)]: results}

			localStorage.setItem('dndOpts', JSON.stringify(newDnDopts))

			setDnD(newDnDopts)
			
			return
		} else {
			return
		}

	}

	const callOrNot = (dndopt) => {

		if(dndOpts[`${dndopt}`].length === 0){
			handleGetOpt(dndopt)
			let liItem = document.getElementById(`${dndopt}Li`).nextElementSibling
			liItem && liItem.classList.toggle('addRemoveMarginDnDlore')
		} else {
			return
		} 

	}

	const toggleDisplay = (item) => {
		document.getElementById(item).classList.toggle('showList')
		//var elScrollTop  =  document.documentElement.scrollTop
		document.getElementById(`${item}Arrowdown`).classList.toggle('arrowUp')
		//document.documentElement.scrollTop = elScrollTop 
		return
	}

	return (
			<section id="dndLore" data-testid="sectionTest">
				<h1>Discover DnD Lore</h1>
				<ul>
					{
						dndOptions.map(item => 
							<>
								<li id={`${item}Li`} onClick={()=>callOrNot(item)}>{item}</li>
								{
									dndOpts[item].length > 0 &&
										<>

											<FiChevronDown 
												className="arrowDown" 
												id={`${item}Arrowdown`}
												onClick={() => toggleDisplay(item)}
											/>
											
											<ul id={item} className="showList">
												{dndOpts[item].map(data => <li>{data.name}</li>)}
											</ul>

										</>
								}
							</>
						)
					}
				</ul>
			</section>
	)
}