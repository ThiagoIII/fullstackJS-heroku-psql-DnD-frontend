//import { handleCharQuestValidation } from './validation'
import api from '../services/api'


const handleDashboardRegister = async (e, opt, userInfoId) => { // 'opt' here is either char or quest
	e.preventDefault()
	try {
		let response = await api.post(`/register${opt}`, 
		{
			[`${opt}name`] : document.getElementById(`${opt}name`).value,
			[`${opt}history`] : document.getElementById(`${opt}history`).value,
			id: userInfoId
		}) //return an Object with config, data, headers etc... , data[0] contains: charname, charhistory and id.
		const { [opt + 'name']: name } = await response.data[0]
		document.getElementById(`${opt}infomessage`).textContent = `${opt} registered with success! ${opt} name: ${name}`
	} catch (error) {
		alert(`Oops, something went wrong, the message is: ${error.response.data}`)
	}
}

export default handleDashboardRegister