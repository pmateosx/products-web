import createHttp from "./BaseService";

const http = createHttp()

export const listProducts = () => http.get('/products')
export const getProduct = (id) => http.get(`/products/${id}`)
export const createProduct = (data) => http.post('/products', data)
export const deleteProduct = (id) => http.delete(`/products/${id}`)
export const updateProduct = (id, data) => http.patch(`/products/${id}`, data)