import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const initialProfile = {
  user: {
    id: '',
    email: '',
    roles: []
  }
}

export const useProfileStore = defineStore('profile', () => {
  const token = ref('')
  const user = ref(initialProfile.user)
  const setToken = (usserToken) => {
    token.value = usserToken
  }

  const setProfile = (userProfile) => {
    user.value = userProfile
  }

  return { setProfile, setToken, token, user }
})
