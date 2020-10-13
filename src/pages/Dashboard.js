import React, { useEffect, useState } from 'react'
import api from '../services/api'

const Dashboard = (props) => {
	const [userInfo, setUserInfo] = useState(null)
	const [charRegistered, setcharRegistered] = useState(null)
	const [questRegistered, setQuestRegistered] = useState(null)
	const user = props.location.state.user


	useEffect(() => {
		try {
			api.post('/fetchUserData', user ).then(response => setUserInfo(response.data))
		} catch (error) {
			alert('Problems fetching user info, sssssorry!')
		}
	},[user])


	async function handleCharRegister(e){
		e.preventDefault()
		let nameCharInput = document.getElementById('nameChar')
		let historyCharInput = document.getElementById('historyChar')
		if(nameCharInput.value === '' || historyCharInput.value === ''){
			return alert('Fields cannot be empty')
		}
		let charToRegister = {
			charName: nameCharInput.value,
			charHistory: historyCharInput.value,
			id: user.id
		}
		try {
			let response = await api.post('/registerChar', charToRegister)
			let newCharRegistered = await response.data[0]
			newCharRegistered === 'error' 
				? setcharRegistered('Error inserting char, please try again') 
				: setcharRegistered(newCharRegistered)
		} catch (error) {
			console.log(error)
		}
		
	}
	async function handleQuestRegister(e){
		e.preventDefault()
		let nameQuestInput = document.getElementById('nameQuest')
		let historyQuestInput = document.getElementById('historyQuest')
		if(nameQuestInput.value === '' || historyQuestInput.value === ''){
			return alert('Fields cannot be empty')
		}
		let questToRegister = {
			questName: nameQuestInput.value,
			questHistory: historyQuestInput.value,
			id: user.id
		}
		try {
			let response = await api.post('/registerQuest', questToRegister)
			let newQuestRegistered = await response.data[0]
			newQuestRegistered === 'error' 
				? setQuestRegistered('Error inserting quest, please try again') 
				: setQuestRegistered(newQuestRegistered)
		} catch (error) {
			console.log(error)
		}
		
	}

	return (
		<>
			<h1>Welcome,{user.name} </h1>
			<form onSubmit={e => handleCharRegister(e)}>
				<label name="name">How the char would like to be called?</label><br></br>
				<input id="nameChar" type="text" name="name" /><br></br>
				<label name="history">Char history, please</label><br></br>
				<input id="historyChar" type="text" name="history" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<form onSubmit={e => handleQuestRegister(e)}>
				<label name="name">How the quest is called?</label><br></br>
				<input id="nameQuest" type="text" name="name" /><br></br>
				<label name="history">History, please</label><br></br>
				<input id="historyQuest" type="text" name="history" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<p> Informações do usuario buscada no load inicial pelo useEffect: </p>

			{
			userInfo !== null 
			?<><p>Chars</p>
				<ul>{userInfo[0].length > 0 ? userInfo[0].map(char => <>
																	<hr/>
																	<li>{char.charname}</li>
																	<li>{char.charhistory}</li>
																	<hr/>
																	</>
																): null}
				</ul>
				<p>Quests</p>
				<ul>{userInfo[1].length > 0  ? userInfo[1].map(quest =><>
																	<hr/>
																	<li>{quest.questname}</li>
																	<li>{quest.quest}</li>
																	<hr/>
																	</>
																): null}
				</ul></>
			:null
			}

			{
				charRegistered !== null
					? <p> Char registrado com success: {charRegistered.charname}, on the id: {charRegistered.id}</p>
					: null
			}

			{
				questRegistered !== null
					?<p>Quest registrada com success: {questRegistered.questname}, on the id: {questRegistered.id}</p>
					: null
			}
		</>
	)
}

export default Dashboard
