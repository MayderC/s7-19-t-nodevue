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
    const response = await http.get('/publicationsbyid/' + id)
    return response
  } catch (error) {
    return {}
  }
}

export const getProjectByUser = async (id) => {
  try {
    const res = await http.get('/publicationsOfUser/' + id)
    return res.data
  } catch (error) {
    return []
  }
}

export const saveProject = async (project) => {
  try {
    console.log(project)
    const resp = await http.post('/publications', project)
    return resp.data
  } catch (error) {
    return {}
  }
}
