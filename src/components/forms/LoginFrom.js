import React from 'react'
import handleLogin from '../../helpers/handleLogin'

const LoginFrom = (props) => {
	const { dispatch } = props
	return (
		<form onSubmit={(e) => handleLogin(e, dispatch)}>
			<label name="name">Please insert your name</label><br></br>
			<input id="nameLogin" type="text" name="name" autoComplete="username" /><br></br>
			<label name="password">Please insert your password</label><br></br>
			<input id="passwordLogin" type="password" name="password" autoComplete="current-password" /><br></br>
			<button type="submit">Login</button>
			<button type="button">Forgot password</button>
		</form>
	)
}

export default LoginFrom
