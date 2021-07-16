import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'http://localhost:3333/users/'
});

export default userAPI;