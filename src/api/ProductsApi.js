import axios from 'axios';

export const productosApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
})