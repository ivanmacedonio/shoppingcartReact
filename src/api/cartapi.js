import axios from 'axios'

export const getAllItems = () => {
    return axios.get('https://fakestoreapi.com/products')
}

export const getItem = (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}/`)
}