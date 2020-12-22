import React, { createContext, useReducer } from 'react'
import { signedStatusReducer } from '../reducers'

const initalSignedStatusState = {
	isLoggedIn: false,
	userInfo: {}
}

export const SignedStatusContext = createContext(initalSignedStatusState)

const SignedStatus = ({children}) => {
	const [state, dispatch] = useReducer(signedStatusReducer, initalSignedStatusState)
	return (
		<SignedStatusContext.Provider value={{state,dispatch}}>
			{children}
		</SignedStatusContext.Provider>
	)
}

export default SignedStatus