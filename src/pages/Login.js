import React, { useState } from 'react'
import api from '../services/api'
import { Redirect } from 'react-router-dom'

export default function Login() {
const [user, setUser] = useState(null)

	const handleLogin = async (e) => {
		e.preventDefault()
		let nameInput = document.getElementById('nameLogin')
		let passwordInput = document.getElementById('passwordLogin')
		if(nameInput.value === '' || passwordInput.value === ''){
			return alert('Fields cannot be empty')
		}
		let userToLogin = {
			name: nameInput.value,
			password: passwordInput.value,
		}
		try {
			let response = await api.post('/login', userToLogin)
			let responseJson = response.data
			console.log(responseJson)
			setUser(responseJson)  
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={(e) => handleLogin(e)}>
				<label name="name">Please insert your name</label><br></br>
				<input id="nameLogin" type="text" name="name" /><br></br>
				<label name="password">Please insert your password</label><br></br>
				<input id="passwordLogin" type="text" name="password" /><br></br>
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
		</>
	)
}