import axios from "axios";

const createHttp = () => {
    const http = axios.create({
        baseURL: 'http://localhost:3001/api'
    })

    http.interceptors.response.use(
        (response) => response.data,
        (error) => console.error(error)
    )
    return http
}

export default createHttp