export const useAuth = () => {
  const user = useState<any>('auth_user', () => null)
  const token = useState<string | null>('auth_token', () => null)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials: Record<string, any>) => {
    // Implement login logic
  }

  const logout = async () => {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  }
}
