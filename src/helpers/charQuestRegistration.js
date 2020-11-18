import { handleCharValidation, handleQuestValidation } from './validation'
import api from '../services/api'

const callCharOrQuestValidators = async (e, opt, user) => {
	return opt === 'char' 
		? handleCharValidation(e, user) 
		: handleQuestValidation(e, user)
}

const infoMessage = (opt,name,registerStatus) => {
	let span = document.getElementById(`${opt}infomessage`)
	registerStatus 
	? span.textContent = `${opt} registered with success! ${opt} name: ${name}`
	: span.textContent = `Error registering ${opt}, please try again}`
}

const handleDashboardRegister = async (e, opt, user) => {
	let toRegister = await callCharOrQuestValidators(e,opt,user)
	if(toRegister){
		try {
			let response = await api.post(`/register${opt}`, toRegister).then(res => res)
			const { [opt + 'name']: name } = await response.data[0]
			response.status !== 400 
				? infoMessage(opt,name,true)
				: infoMessage(opt,name,false)
		} catch (error) {
			console.log(error)
		}
	} 
}

export default handleDashboardRegister