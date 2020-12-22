import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { SignedStatusContext } from '../context/signedStatusContext/signedStatusContext'
import { logoutDashboard, logoutFailure } from '../helpers/handleLogOut'
import CQform from '../components/forms/CQform'
import UserList from '../components/UserList';



const Dashboard = () => {
	const { state: { isLoggedIn, userInfo }, dispatch } = useContext(SignedStatusContext)

	let lists = localStorage.lists
	const [chars, quests] = lists !== undefined ? JSON.parse(lists) : [[],[]]

	return  <>
	    {
		!isLoggedIn 
			? <Redirect to={{pathname: "/login"	}} /> 
			: <section id='dashboard'>
				<GoogleLogout clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={(dispatch) => logoutDashboard(dispatch)}
					onFailure={logoutFailure}/> 

				{
				userInfo !== {} && userInfo !== null
					? <>
						<h1>Welcome,{ userInfo.name } </h1>
						{userInfo.image && <img src={userInfo.image} alt={`${userInfo.name}ProfileImage`}/>}
						</>
					: <h1>Getting your name!</h1>
				}
				<button type="button" name="button" onClick={() => logoutDashboard(dispatch)}>Logout</button> 
				<CQform opt='char' userInfoId={userInfo.id}/>
				<CQform opt='quest' userInfoId={userInfo.id}/>	
				<UserList opt='char'  id={userInfo.id} list={chars}/>
				<UserList opt='quest' id={userInfo.id} list={quests}/>
				</section>
		}
	</>
}
	

export default Dashboard
