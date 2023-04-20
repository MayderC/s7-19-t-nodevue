import http from './http'

export const createMatch = async (match) => {
  try {
    const resp = await http.post('/match', match)
    return resp.data
  } catch (error) {
    return {}
  }
}
