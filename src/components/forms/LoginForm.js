import React,{  useState } from 'react'
import { handleChangeSignedStatus } from "../../context/actions"
import api from '../../services/api'
import LoadingUser from '../LoadingUser'


const LoginFrom = (props) => {
	const { dispatch } = props
	const [loading, setLoading] = useState(false)
	
	const handleLogin = async (e, dispatch) => {
		e.preventDefault()
		try {
			setLoading(true)
			let response = await api.post('/login', {
					name: document.getElementById('nameLogin').value,
					password: document.getElementById('passwordLogin').value
				})
				console.log(response)
				setLoading(false)
				response.status === 200 
				&& handleChangeSignedStatus(dispatch, {isLoggedIn: true, userInfo:  await response.data})
				
			return				
		} catch (error) {
			const { data, status, statusText } = error.response
			alert(`- Error on login, message: ${data} - Status code of ${status} - Status message of ${statusText}`)
			setLoading(false)
			console.log(error.response)
		}
	}
	

return <>
	{
		loading 
		? <LoadingUser /> 
		: 	<form onSubmit={(e) => handleLogin(e, dispatch)} style={{margin:"0 5% 2rem 5%"}}>
				<label htmlFor="name">Please insert your name</label><br></br>
				<input 
					id="nameLogin" 
					type="text" 
					name="name" 
					autoComplete="username" 
					required />
				<br></br>
				<label htmlFor="password">Please insert your password</label><br></br>
				<input 
					id="passwordLogin" 
					type="password" 
					name="password" 
					autoComplete="current-password" 
					//minLength="10"
					maxLength="20"
					//pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+=_{}()[/¨¬ªº°#?!@$%^&*-]).{10,20}$"
					required />
				<br></br>
				<button type="submit">Login</button>
			</form>
	}
	</>

}

export default LoginFrom
