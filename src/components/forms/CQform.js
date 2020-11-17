import React from 'react'
import callCharOrQuestValidators from '../../helpers/charQuestRegistration'
import api from '../../services/api'

const CQform = (props) => {
	const { opt, userInfo } = props

	const infoMessage = (opt,name,registerStatus) => {
		let span = document.getElementById(`${opt}infomessage`)
		registerStatus 
		? span.textContent = `${opt} registered with success! ${opt} name: ${name}`
		: span.textContent = `Error registering ${opt}, please try again}`
	}

	async function handleDashboardRegister(e, opt, user){
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

	return <>
		<form onSubmit={e => handleDashboardRegister(e , opt , userInfo)}>
			<label name={`${opt}name`}>How the {opt} is called?</label><br></br>
			<input id={`${opt}name`} type="text" name={`${opt}name`} /><br></br>
			<label name={`${opt}history`}>History, please</label><br></br>
			<input id={`${opt}history`} type="text" name={`${opt}history`} /><br></br>
			<button type="submit">Submit</button>
		</form>
		<span id={`${opt}infomessage`}></span>
	</>
}

export default CQform
