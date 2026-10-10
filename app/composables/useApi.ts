export const useApi = () => {
  const config = useRuntimeConfig()

  const fetchApi = async <T>(url: string, options: Parameters<typeof $fetch>[1] = {}) => {
    return await $fetch<T>(url, {
      baseURL: config.public.apiBase || '/api',
      ...options,
    })
  }

  return {
    fetchApi,
  }
}
