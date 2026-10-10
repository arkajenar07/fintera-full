export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth()
  const requiredRoles = to.meta.roles as string[] | undefined

  if (requiredRoles && user.value && !requiredRoles.includes(user.value.role)) {
    return navigateTo('/')
  }
})
