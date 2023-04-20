export const saveProfile = (prfile) => localStorage.setItem('profile', JSON.stringify(prfile))
export const getProfile = () => JSON.parse(localStorage.getItem('profile'))
export const deleteProfile = () => localStorage.removeItem('profile')
