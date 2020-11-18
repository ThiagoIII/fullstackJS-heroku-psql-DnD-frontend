import React from 'react'
import handleDashboardRegister from '../../helpers/charQuestRegistration'

const CQform = (props) => {
	const { opt, userInfo } = props

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
