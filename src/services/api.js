import axios from 'axios';	

const api = axios.create({
	baseURL: 'https://salty-thicket-65996.herokuapp.com/',
})

export default api