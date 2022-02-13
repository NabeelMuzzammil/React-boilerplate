import axios from 'axios';
const basicRoute = '';
const instance = axios.create({
	baseURL: basicRoute,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

export default instance;