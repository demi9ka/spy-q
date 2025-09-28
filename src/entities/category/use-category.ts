'use client'

import api from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export const useCategory = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => (await api.category.load()).data
  })
}
