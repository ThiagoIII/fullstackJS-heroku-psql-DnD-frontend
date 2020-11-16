import React, { useState } from 'react'
import api from '../services/api'
import { Redirect } from 'react-router-dom'
import { handleLoginValidation } from '../helpers/validation'
import { GoogleLogin } from 'react-google-login';


export default function Login() {
const [user, setUser] = useState(null)

	const handleLogin = async (e) => {
		let user = handleLoginValidation(e)
		if(user){
			try {
				let response = await api.post('/login', user)
				let responseJson = response.data
				setUser(responseJson)  
			} catch (error) {
				console.log(error)
			}
		} else {
			return 
		}
	}

	const handleLoginSuccess = (res) => {
			const { name, email, imageUrl } = res.profileObj
			const profile = {
				name: name,
				email: email,
				image: imageUrl,
				TokenId: res.tokenId
			}
			console.log(profile)
			setUser(profile)
	}

	const handleLoginFailure = (res) => {
		alert('problems with your login',res)
	}
	console.log(user)
	return <section id="login">
			<h1>Login</h1>
			<form onSubmit={(e) => handleLogin(e)}>
				<label name="name">Please insert your name</label><br></br>
				<input id="nameLogin" type="text" name="name" autoComplete="username" /><br></br>
				<label name="password">Please insert your password</label><br></br>
				<input id="passwordLogin" type="password" name="password" autoComplete="current-password" /><br></br>
				<button type="submit">Login</button>
				<button type="button">Forgot password</button>
			</form>
			<GoogleLogin
				clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={handleLoginSuccess}
				onFailure={handleLoginFailure}
				cookiePolicy={'single_host_origin'}
				responseType='code,token'
				style={{marginTop: '2rem'}}
				isSignedIn={true}
			/>
			{
				user !== null 
					? <Redirect to={{
						pathname: "/dashboard",
						state: { user: user	}
						}} /> 
					: null
			}
		</section>
}