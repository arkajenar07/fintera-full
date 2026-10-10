export const usePagination = (initialPage = 1, initialLimit = 10) => {
  const page = ref(initialPage)
  const limit = ref(initialLimit)
  const total = ref(0)

  const totalPages = computed(() => Math.ceil(total.value / limit.value))
  const hasNextPage = computed(() => page.value < totalPages.value)
  const hasPrevPage = computed(() => page.value > 1)

  const nextPage = () => {
    if (hasNextPage.value) page.value++
  }

  const prevPage = () => {
    if (hasPrevPage.value) page.value--
  }

  const setPage = (p: number) => {
    page.value = p
  }

  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    setPage,
  }
}
