'use client'

import api from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export const useCategory = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: async () => (await api.panel.category()).data
  })
}
