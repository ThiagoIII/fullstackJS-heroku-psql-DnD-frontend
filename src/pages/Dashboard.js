import React, { useEffect, useState } from 'react'
import CharList from '../components/CharList'
import QuestList from '../components/QuestList'
import api from '../services/api'
import handleCharQuestValidation from '../helpers/charQuestRegistration'
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { SignedStatusContext } from '../context/signedStatusContext/signedStatusContext'
import { handleChangeSignedStatus } from '../context/actions'

const Dashboard = () => {
	const { state, dispatch } = useContext(SignedStatusContext)
	const [userInfo, setUserInfo] = useState(null)
	const [charRegistered, setcharRegistered] = useState(null)
	const [questRegistered, setQuestRegistered] = useState(null)
	let userDetails = JSON.parse(window.localStorage.getItem('userIdLoggedIn'))

	useEffect(() => {
		console.log('inside useeffect')
			try {
				api.post('/fetchUserData', userDetails ).then(response => setUserInfo(response.data))
			} catch (error) {
				alert('Problems fetching user info, sssssorry!')
			}		
	},[])

	
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
		localStorage.clear()
		handleChangeSignedStatus(dispatch, false)
	}
	const logoutFailure = () => {
		alert('Failed in logout')
	}

	return  <>
		{	!state.signedStatus 
				? <Redirect to={{
					pathname: "/login"
					}} /> 
				: <section id='dashboard'>
					<GoogleLogout
						clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
						buttonText="Logout"
						onLogoutSuccess={logoutDashboard}
						onFailure={logoutFailure}
					/>
					<h1>Welcome,{userDetails !== null ? userDetails.name : 'Sorry no name for you'} </h1>
					{
						userDetails.image
							? <img src={userDetails.image} alt={`${userDetails.name}ProfileImage`}/>
							: null
					}
					<form onSubmit={e => handleCharQuestRegistration(e, 'char', userDetails)}>
						<label name="nameChar">How the char would like to be called?</label><br></br>
						<input id="nameChar" type="text" name="nameChar" /><br></br>
						<label name="historyChar">Char history, please</label><br></br>
						<input id="historyChar" type="text" name="historyChar" /><br></br>
						<button type="submit">Submit</button>
					</form>
					<form onSubmit={e => handleCharQuestRegistration(e , 'quest', userDetails)}>
						<label name="nameQuest">How the quest is called?</label><br></br>
						<input id="nameQuest" type="text" name="nameQuest" /><br></br>
						<label name="historyQuest">History, please</label><br></br>
						<input id="historyQuest" type="text" name="historyQuest" /><br></br>
						<button type="submit">Submit</button>
					</form>
					<button type="button" name="button" onClick={() => logoutDashboard()}>Logout</button>
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
				</section>
		}
	</>
	
	
/* 	<section id='dashboard'>
			<GoogleLogout
				clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
				buttonText="Logout"
				onLogoutSuccess={logoutDashboard}
				onFailure={logoutFailure}
			/>
			<h1>Welcome,{userDetails !== null ? userDetails.name : 'Sorry no name for you'} </h1>
			<form onSubmit={e => handleCharQuestRegistration(e, 'char', userDetails)}>
				<label name="nameChar">How the char would like to be called?</label><br></br>
				<input id="nameChar" type="text" name="nameChar" /><br></br>
				<label name="historyChar">Char history, please</label><br></br>
				<input id="historyChar" type="text" name="historyChar" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<form onSubmit={e => handleCharQuestRegistration(e , 'quest', userDetails)}>
				<label name="nameQuest">How the quest is called?</label><br></br>
				<input id="nameQuest" type="text" name="nameQuest" /><br></br>
				<label name="historyQuest">History, please</label><br></br>
				<input id="historyQuest" type="text" name="historyQuest" /><br></br>
				<button type="submit">Submit</button>
			</form>
			<button type="button" name="button" onClick={() => logoutDashboard()}>Logout</button>
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
				!state.signedStatus 
					? <Redirect to={{
						pathname: "/login"
						}} /> 
					: null
			}
		</section>
 */}

export default Dashboard
