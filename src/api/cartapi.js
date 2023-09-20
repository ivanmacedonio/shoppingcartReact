import axios from 'axios'

export const getAllItems = () => {
    return axios.get('https://fakestoreapi.com/products')
}