import React, { useEffect, useState } from 'react'
import CharList from '../components/CharList'
import QuestList from '../components/QuestList'
import api from '../services/api'
import { handleCharRegisterValidation, handleQuestRegisterValidation } from '../helpers/validation'

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
	},[user, charRegistered, questRegistered])


	/* async function handleCharRegister(e){
		let charToRegister = handleCharRegisterValidation(e, user)
		if(charToRegister){
			try {
				let response = await api.post('/registerChar', charToRegister)
				let newCharRegistered = await response.data[0]
				newCharRegistered === 'error' 
					? setcharRegistered('Error inserting char, please try again') 
					: setcharRegistered(newCharRegistered)
			} catch (error) {
				console.log(error)
			}
		} else {
			return
		}
	}

	async function handleQuestRegister(e){
		let questToRegister = handleQuestRegisterValidation(e, user)
		if(questToRegister){
			try {
				let response = await api.post('/registerQuest', questToRegister)
				let newQuestRegistered = await response.data[0]
				newQuestRegistered === 'error' 
					? setQuestRegistered('Error inserting quest, please try again') 
					: setQuestRegistered(newQuestRegistered)
			} catch (error) {
				console.log(error)
			}
		} else {
			return
		}
	} */

	async function handleCharQuestRegistration(e, opt){
		let toRegister, response
		toRegister = opt === 'char' ? handleCharRegisterValidation(e, user) : handleQuestRegisterValidation(e, user)
		if(toRegister){
			try {
				response = await api.post(`/register${opt}`, toRegister).then(res => res.data[0])
				response.status !== 400 
					? opt === 'char'
						? setcharRegistered(response)
						: setQuestRegistered(response)
					: alert(`Error registering ${opt}`)
			} catch (error) {
				console.log(error)
			}
		} else {
			return
		}
	}
	return <section id='dashboard'>
			<h1>Welcome,{user.name} </h1>
			<form onSubmit={e => handleCharQuestRegistration(e, 'char')}>
				<label name="name">How the char would like to be called?</label><br></br>
				<input id="nameChar" type="text" name="name" /><br></br>
				<label name="history">Char history, please</label><br></br>
				<input id="historyChar" type="text" name="history" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<form onSubmit={e => handleCharQuestRegistration(e , 'quest')}>
				<label name="name">How the quest is called?</label><br></br>
				<input id="nameQuest" type="text" name="name" /><br></br>
				<label name="history">History, please</label><br></br>
				<input id="historyQuest" type="text" name="history" /><br></br>
				<button type="submit">Submit</button>
			</form>
			{
			userInfo !== null && <>	<CharList userInfo={userInfo[0]} />
									<QuestList userInfo={userInfo[1]} />
								</>
			}
			{charRegistered !== null && <p>Char registrado com success: {charRegistered.charname}, on the id: {charRegistered.id}</p>
			}
			{questRegistered !== null && <p>Quest registrada com success: {questRegistered.questname}, on the id: {questRegistered.id}</p>
			}
		</section>
}

export default Dashboard
