export function handleRegisterValidation(e){
	e.preventDefault()
	let nameInput = document.getElementById('name')
	let emailInput = document.getElementById('email')
	let passwordInput = document.getElementById('password')
	let confirm_passwordInput = document.getElementById('confirm_password')
	if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirm_passwordInput.value === '' || confirm_passwordInput.value !== passwordInput.value){
		return alert('Fields cannot be empty or/and your confirm password is wrong')
	} else {
		let userToRegister = {
				name: nameInput.value,
				email: emailInput.value,
				password: passwordInput.value,
		}
		return userToRegister 
	}
}

export function handleLoginValidation(e){
	e.preventDefault()
	let nameInput = document.getElementById('nameLogin')
	let passwordInput = document.getElementById('passwordLogin')
	if(nameInput.value === '' || passwordInput.value === ''){
		return alert('Fields cannot be empty')
	} else {
		let userToLogin = {
			name: nameInput.value,
			password: passwordInput.value,
		}
		return userToLogin
	}
}

export function handleCharRegisterValidation(e, user){
	e.preventDefault()
		let nameCharInput = document.getElementById('nameChar')
		let historyCharInput = document.getElementById('historyChar')
		if(nameCharInput.value === '' || historyCharInput.value === ''){
			return alert('Fields cannot be empty')
		} else {
			let charToRegister = {
				charName: nameCharInput.value,
				charHistory: historyCharInput.value,
				id: user.id
			}
			return charToRegister
		}
		
}
export function handleQuestRegisterValidation(e, user){
	e.preventDefault()
		let nameQuestInput = document.getElementById('nameQuest')
		let historyQuestInput = document.getElementById('historyQuest')
		if(nameQuestInput.value === '' || historyQuestInput.value === ''){
			return alert('Fields cannot be empty')
		} else {
			let questToRegister = {
				questName: nameQuestInput.value,
				questHistory: historyQuestInput.value,
				id: user.id
			}
			return questToRegister
		}
		
}