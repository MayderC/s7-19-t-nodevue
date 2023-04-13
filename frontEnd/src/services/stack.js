import http from './http'

export const getStacks = async () => {
  try {
    return await http.get('/stack')
  } catch (error) {
    return error
  }
}
