import api from '../services/api'

const handleRegisterUser = async () => {
		try {
			let response = await api.post('/register1',
				{
					name: document.getElementById('name').value,
					email: document.getElementById('email').value,
					password: document.getElementById('password').value,
				})
			return response 
		} catch (error) {
			console.log('erro handleRegisterUser ==> ', error)
			return 'error'
		} 	
}

export default handleRegisterUser
