import React, { useEffect,  useState } from 'react'
import api from '../services/api'

const UserList = (props) => {
	const [listLocalState, setListLocal] = useState([])

	const { opt, id , list } = props

	useEffect(() => {
		if(list.length === 0){
			let fromLocal = opt === 'char' ? localStorage.noChars : localStorage.noQuests
			if(opt === 'char' && fromLocal !== undefined ){
				return 
			} else if(opt === 'quest' && fromLocal !== undefined){
				return 
			} else {
				api.post('/fetchUserData', { id })
					.then(res => {
						if(res.status !== 400){
							if(opt === 'char' && res.data[0].length === 0 ){
								localStorage.noChars = 'no chars registered' 
							} else if(opt === 'quest' && res.data[1].length === 0){
								localStorage.noQuests = 'no quests registered'
							} else {
								localStorage.lists = JSON.stringify(res.data)
								opt === 'char' ? setListLocal(res.data[0]) : setListLocal(res.data[1])
							}
						} else {
							return alert(`Problems ${res.data}`)
						}
						
					})
					.catch(error => alert(`Problems fetching user info, sssorry! Here is the error message : ${error.response.data}`))
			}
			
		} 
	},[list, id, opt])

	const h3Title = opt.toUpperCase()
	let listFinal = list.length === 0 ? listLocalState : list

	return 	<>
				<h3>{h3Title}S</h3>
				<ul>
				{listFinal !== null && listFinal !== undefined && listFinal.length > 0  
						? listFinal
							.map(item =>
								<>
									<li>{item[`${opt}name`]}</li>
									{opt === 'char'
										? <li>{item[`${opt}history`]}</li>
										: <li>{item[opt]}</li>
									}
								</>) 
						: <h4>No {opt}s registered from you!</h4>}
				</ul>
			</>
}

export default React.memo(UserList)
