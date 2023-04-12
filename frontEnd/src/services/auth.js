import http from './http'

export const login = async (user) => {
  try {
    return await http.post('/auth/login', user)
  } catch (error) {
    return error
  }
}

export const register = async (user) => {
  try {
    return await http.post('/auth/register', user)
  } catch (error) {
    return error
  }
}
