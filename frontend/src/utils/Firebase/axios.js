import axios from 'axios'


const instance = axios.create({
    baseURL: "https://meeting-management-f5063-default-rtdb.firebaseio.com/"
})

export default instance