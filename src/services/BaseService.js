import axios from "axios";

const createHttp = () => {
    const http = axios.create({
        baseURL: 'https://product-api.onrender.com/api'
    })

    http.interceptors.response.use(
        (response) => response.data,
        (error) => console.error(error)
    )
    return http
}

export default createHttp