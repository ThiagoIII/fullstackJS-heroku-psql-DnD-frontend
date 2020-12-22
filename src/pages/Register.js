import React, {useState} from 'react'
import handleRegisterUser from '../helpers/handleRegisterUser'

export default function Register() {
	const [res, setRes] = useState(null)
	const [registrando, setReg] = useState(false)
	const handleRegister = async (e) => {
		e.preventDefault()
		setReg(true)
		let res = await handleRegisterUser()
		setReg(false)
		res === 'error' ? alert('error in the browser') 
		: res.status === 400 
			? alert('error in status 400') 
			: setRes(await res.data[0])
	}

	return (
	<section id="register">
		<h1>Register</h1>
		<form onSubmit={e => handleRegister(e)}>
			<label htmlFor="name">How would you like to be called?</label><br></br>
			<input 
				id="name" 
				type="text" 
				name="name"
				required
			/>
			<br></br>
			<label htmlFor="email">What is your email address, please ?</label><br></br>
			<input 
				id="email" 
				type="email" 
				name="email"
				required 
			/>
			<br></br>
			<label htmlFor="password" >Create a password with 10 to 30 characters long and least one <em>uppercase letter</em>, one <em>lowercase letter</em>, one <em>number</em> and one <em>symbol</em> except for "]" and "\", please.</label><br></br>
			<input 
				id="password" 
				type="password" 
				name="password" 
				//minLength="10"
				maxLength="20"
				//pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+=_{}()[/¨¬ªº°#?!@$%^&*-]).{10,20}$"
				required 
			/>
			<br></br>
			<label htmlFor="confirm_password">Confirm the password, please.</label><br></br>
			<input 
				id="confirm_password" 
				type="password" 
				name="confirm_password" 
				//minLength="10"
				maxLength="20"
				//pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+=_{}()[/¨¬ªº°#?!@$%^&*-]).{10,20}$"
				required 
			/>
			<br></br>
			<button type="submit">Submit</button>
		</form>
		{
			registrando === true ? <span>spinner</span> : null
		}
		{
			res !== null 
				? <p>Hello {res.name}, email {res.email}, joined at: {res.joined}, with id: {res.id}</p>
				: null
		} 
	</section>
	
	)
}