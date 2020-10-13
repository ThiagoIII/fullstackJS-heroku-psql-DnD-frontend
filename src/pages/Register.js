import React, {useState} from 'react'
import api from '../services/api'

export default function Register() {
	const [res, setRes] = useState(null)

async function handleRegisterUser(e){
	e.preventDefault()
	let nameInput = document.getElementById('name')
	let emailInput = document.getElementById('email')
	let passwordInput = document.getElementById('password')
	let confirm_passwordInput = document.getElementById('confirm_password')
	if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirm_passwordInput.value === '' || confirm_passwordInput.value !== passwordInput.value){
		return alert('Fields cannot be empty or your confirm password is wrong')
	}
	let userToRegister = {
		name: nameInput.value,
		email: emailInput.value,
		password: passwordInput.value,
	}
	try {
		let response = await api.post('/register', userToRegister)
		let newUserRegistered = await response.data[0]
		newUserRegistered === 'error' ? setRes('Error inserting user, please try again') : setRes(newUserRegistered)
	} catch (error) {
		console.log('erro ==> ', error)
	} 	
}
	return (
	<>
		<h1>Register</h1>
		<form onSubmit={e => handleRegisterUser(e)}>
			<label name="name">How would you like to be called?</label><br></br>
			<input id="name" type="text" name="name" /><br></br>
			<label name="email">What is your email address ?</label><br></br>
			<input id="email" type="email" name="email" /><br></br>
			<label name="password">Create a password, please</label><br></br>
			<input id="password" type="password" name="password" /><br></br>
			<label name="confirm_password">Create a password, please</label><br></br>
			<input id="confirm_password" type="password" name="confirm_password" /><br></br>
			<button type="submit">Submit</button>
		</form>
	{
		res !== null 
		? <p>Ola {res.name}, de email de  {res.email}, joined at: {res.joined}, with id: {res.id}</p>
		: null
	} 

		
	</>
	)
}