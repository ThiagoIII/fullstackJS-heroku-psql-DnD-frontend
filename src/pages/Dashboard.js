import React, { useEffect, useState } from 'react'
import CharList from '../components/CharList'
import QuestList from '../components/QuestList'
import api from '../services/api'
//import { handleCharRegisterValidation, handleQuestRegisterValidation } from '../helpers/validation'
import handleCharQuestValidation from '../helpers/charQuestRegistration'
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
	const [userInfo, setUserInfo] = useState(null)
	const [charRegistered, setcharRegistered] = useState(null)
	const [questRegistered, setQuestRegistered] = useState(null)
	const [redirect, setRedirect] = useState(null)
	const user = props.location.state.user


	useEffect(() => {
		try {
			api.post('/fetchUserData', user ).then(response => setUserInfo(response.data))
		} catch (error) {
			alert('Problems fetching user info, sssssorry!')
		}
	},[user, charRegistered, questRegistered])

	
	async function handleCharQuestRegistration(e, opt, user){
		let toRegister = await handleCharQuestValidation(e,opt,user)
		let response
		if(toRegister){
			try {
				response = await api.post(`/register${opt}`, toRegister).then(res => res.data[0])
				response.status !== 400 
					? opt === 'char'
						? setcharRegistered(response)
						: setQuestRegistered(response)
					: alert(`Error registering ${opt}: ${response.json()}`)
			} catch (error) {
				console.log(error)
			}
		} 
	}

	const logoutDashboard = () => {
		alert('You will be logged out from Dashboard now.')
		setRedirect(true)
	}

	return <section id='dashboard'>
			<GoogleLogout
				clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
				buttonText="Logout"
				onLogoutSuccess={logoutDashboard}
			>
			</GoogleLogout>
			<h1>Welcome,{user.name} </h1>
			<form onSubmit={e => handleCharQuestRegistration(e, 'char', user)}>
				<label name="name">How the char would like to be called?</label><br></br>
				<input id="nameChar" type="text" name="name" /><br></br>
				<label name="history">Char history, please</label><br></br>
				<input id="historyChar" type="text" name="history" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<form onSubmit={e => handleCharQuestRegistration(e , 'quest', user)}>
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
			{charRegistered !== null && 
				<p>
					Char registrado com success: {charRegistered.charname}, on the id: {charRegistered.id}
				</p>
			}
			{questRegistered !== null && 
				<p>
					Quest registrada com success: {questRegistered.questname}, on the id: {questRegistered.id}
				</p>
			}
			{
				redirect != null
					? <Redirect to={{ pathname: "/login" }} />
					: null
			}
		</section>
}

export default Dashboard
