import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/leaforewer/Real-World-Vue-3/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPhones() {
        return apiClient.get('/phones')
    },
    //Added new call
    getPhone(id) {
        return apiClient.get('/phones/' + id)
    }
}