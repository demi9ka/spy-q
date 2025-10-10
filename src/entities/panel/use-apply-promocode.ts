import api from '@/shared/api'
import { ApplyPromocodeParams } from '@/shared/api/panel/types'
import { useQuery } from '@tanstack/react-query'

export const useApplyPromocode = (params: ApplyPromocodeParams) => {
  return useQuery({
    queryKey: ['apply-promocode', params],
    queryFn: async () => (await api.panel.applyPromocode(params)).data,
    enabled: params.promocode.length > 3
  })
}
