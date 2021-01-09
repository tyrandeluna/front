import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({ baseURL: DB_HOST })

api.interceptors.request.use(async config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api