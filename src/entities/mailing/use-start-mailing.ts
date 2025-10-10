import api from '@/shared/api'
import { DefaultParams } from '@/shared/api/mailing/types'
import { useMutation } from '@tanstack/react-query'

export const useStartMailing = () => {
  return useMutation({
    mutationFn: async (data: DefaultParams) => (await api.mailing.start(data)).data
  })
}
