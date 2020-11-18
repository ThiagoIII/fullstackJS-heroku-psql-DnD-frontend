import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { SignedStatusContext } from '../context/signedStatusContext/signedStatusContext';
import LoginForm from '../components/forms/LoginFrom'
import { handleGoogleLoginSuccess, handleGoogleLoginFailure } from '../helpers/googleHelpers'

export default function Login() {
	const { state, dispatch } = useContext(SignedStatusContext)

const googleLogIn = (res,dispatch) => {
	handleGoogleLoginSuccess(res, dispatch)
}

	return <>
		{
			state.isLoggedIn
				? <Redirect to={{
					pathname: "/dashboard"
					}} />
				: <section id="login">
					<h1>Login</h1>
					<LoginForm dispatch={ dispatch } />
					<GoogleLogin
						clientId="416809222050-fee34iiph6k9lmmis8qgse4a0g2gs6lr.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={googleLogIn}
						onFailure={handleGoogleLoginFailure}
						id="googleLogin"
						/>
					</section>
		}		
		</>
}