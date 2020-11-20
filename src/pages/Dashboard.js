import React, { useEffect, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { SignedStatusContext } from '../context/signedStatusContext/signedStatusContext'
import api from '../services/api'
import { logoutDashboard, logoutFailure } from '../helpers/handleLogOut'
import CQform from '../components/forms/CQform'
import UserList from '../components/UserList';


const Dashboard = () => {
	const { state, dispatch } = useContext(SignedStatusContext)
	const [userInfo, setUserInfo] = useState(null)

	useEffect(() => {
		console.log('dashboard user fecth')
		let userDetails = JSON.parse(window.localStorage.getItem('userIdLoggedIn'))
		try {
			api.post('/fetchUserData', userDetails )
			.then(response => setUserInfo(response.data.concat(userDetails)))
		} catch (error) {
			alert('Problems fetching user info, sssssorry!')
		}		
	},[])

	

	return  <>
		{	!state.isLoggedIn 
				? <Redirect to={{
					pathname: "/login"
					}} /> 
				: <section id='dashboard'>
					<GoogleLogout
						clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
						buttonText="Logout"
						onLogoutSuccess={(dispatch) => logoutDashboard(dispatch)}
						onFailure={logoutFailure}
					/> 
					<h1>Welcome,{userInfo !== null ? userInfo[2].name : 'Getting your name'} </h1>
					{
						userInfo !== null &&
						userInfo[2].image &&
						<img src={userInfo[2].image} alt={`${userInfo[2].name}ProfileImage`}/>
					}
					<button type="button" name="button" onClick={() => logoutDashboard(dispatch)}>Logout</button> 
					{
					userInfo && 
					<>	
						<CQform opt='char' userInfo={userInfo[2]} />
						<CQform opt='quest' userInfo={userInfo[2]} />				
						<UserList opt='char' userInfo={userInfo[0]} />
						<UserList opt='quest' userInfo={userInfo[1]} />
					</>
					}
				</section>
		}
	</>
}
	

export default React.memo(Dashboard)
