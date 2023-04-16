import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const initialProfile = {
  token: '',
  profile: {
    id: '',
    email: '',
    roles: []
  }
}

export const useProfileStore = defineStore('profile', () => {
  const token = ref('')
  const profile = ref(initialProfile)
  const setToken = (usserToken) => {
    token.value = usserToken
  }

  const setProfile = (userProfile) => {
    profile.value = userProfile
  }

  return { setProfile, setToken, token, profile }
})
