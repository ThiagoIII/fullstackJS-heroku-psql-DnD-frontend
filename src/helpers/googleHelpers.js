import { handleChangeSignedStatus } from '../context/actions'

export const handleGoogleLoginSuccess = (res, dispatch) => {
    const { name, imageUrl } = res.profileObj
    handleChangeSignedStatus(dispatch, {
        isLoggedIn: true,
        userInfo: {
            name: name,
            image: imageUrl,
            id: res.tokenId
        }
    })
}

export const handleGoogleLoginFailure = res => {
    alert('problems with your login with GOOGLE')
    console.log(res)
}
