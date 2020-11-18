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
}

export const handleGoogleLoginFailure = (res) => {
alert('problems with your login with GOOGLE')
console.log(res)
}