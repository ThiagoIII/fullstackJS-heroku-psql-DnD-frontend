import React, { useState } from 'react'
import api from '../services/api'
import { Redirect } from 'react-router-dom'
import { handleLoginValidation } from '../helpers/validation'


export default function Login() {
const [user, setUser] = useState(null)

	const handleLogin = async (e) => {
		let user = handleLoginValidation(e)
		console.log('user from login validaion',user)
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