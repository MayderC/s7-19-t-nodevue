import http from './http'

export const getStacks = async () => {
  try {
    return await http.get('/stack')
  } catch (error) {
    console.log('array vaci')
    return []
  }
}
