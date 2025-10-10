import api from '@/shared/api'
import { SendFormData } from '@/shared/api/panel/types'
import { useMutation } from '@tanstack/react-query'

export const useSendForm = () => {
  return useMutation({
    mutationFn: async (data: SendFormData) => (await api.panel.sendForm(data)).data
  })
}
