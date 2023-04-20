import http from './http'

export const getAllProjects = async () => {
  try {
    const response = await http.get('/publications')
    return response.data.data
  } catch (error) {
    return []
  }
}

export const getProjectById = async (id) => {
  try {
    const response = await http.get('/publications/' + id)
    return response
  } catch (error) {
    return {}
  }
}
