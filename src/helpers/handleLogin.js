import { handleLoginValidation } from "./validation"
import { handleChangeSignedStatus } from "../context/actions"
import api from '../services/api'

const handleLogin = async (e, dispatch) => {
	let userValidated = handleLoginValidation(e)
	if(userValidated){
		try {
			let response = await api.post('/login', userValidated)
			let data = response.data
			let res = {...data, id: data.id.toString(10)}
			localStorage.setItem('userIdLoggedIn', JSON.stringify(res))
			handleChangeSignedStatus(dispatch, true)
			return				
		} catch (error) {
			console.log(error)
		}
	} else {
		return 
	}
}

export default handleLogin