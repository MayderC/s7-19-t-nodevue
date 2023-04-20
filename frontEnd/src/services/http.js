import axios from 'axios'
import { useRouter } from 'vue-router'
const URL_BASE_API = import.meta.env.VITE_URL_BASE_API
import { useProfileStore } from './../stores/profile'
import { deleteProfile } from '../helpers/localStorage'

const http = axios.create({
  baseURL: URL_BASE_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: ''
  }
})

http.interceptors.request.use(
  function (config) {
    const store = useProfileStore()
    if (config.url.includes('auth')) return config
    config.headers.Authorization = 'Bearer ' + store.token
    return config
  },
  function (error) {
    // Do something with request error
    const UNAUTHORIZED = 401
    const router = useRouter()
    if (error.response.status === UNAUTHORIZED) {
      deleteProfile()
      return router.push('/')
    }
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    const UNAUTHORIZED = 401
    const router = useRouter()
    if (error.response.status === UNAUTHORIZED) {
      deleteProfile()
      return router.push('/')
    }
    return Promise.reject(error)
  }
)

export default http
