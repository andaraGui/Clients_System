import axios from 'axios';

export const apiClients = axios.create({
    baseURL: 'http://localhost:3333/clients'
});

export const apiUsers = axios.create({
    baseURL: 'http://localhost:3333/users'
});
