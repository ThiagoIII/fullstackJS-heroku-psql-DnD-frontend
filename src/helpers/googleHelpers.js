import { handleChangeSignedStatus } from "../context/actions"

export const handleGoogleLoginSuccess = (res,dispatch) => {
	const { name, email, imageUrl } = res.profileObj
	const profile = {
		name: name,
		email: email,
		image: imageUrl,
		TokenId: res.tokenId
	} 
	localStorage.setItem('userIdLoggedIn', JSON.stringify(profile))
	handleChangeSignedStatus(dispatch, true)
	console.log(res.profileObj)
}

export const handleGoogleLoginFailure = (res) => {
alert('problems with your login',res)
}