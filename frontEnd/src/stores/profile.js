import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProfile } from '../helpers/localStorage'

const initialProfile = {
  user: {
    id: '',
    email: '',
    roles: []
  }
}

export const useProfileStore = defineStore('profile', () => {
  const profile = getProfile()
  const token = ref(profile ? profile.token : '')
  const user = ref(profile ? profile.user : initialProfile.user)
  const setToken = (userToken) => {
    token.value = userToken
  }

  const setProfile = (userProfile) => {
    user.value = userProfile
  }

  return { setProfile, setToken, token, user }
})
