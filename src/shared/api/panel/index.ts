import { api } from '..'
import { ApplyPromocodeParams, ApplyPromocodeResponse, CategoryResponse, SendFormData, SendFormReponse } from './types'

const PREFIX = '/panel'

const category = async () => {
  return await api.get<CategoryResponse>(PREFIX + '/category')
}

const applyPromocode = async (params: ApplyPromocodeParams) => {
  return await api.get<ApplyPromocodeResponse>(PREFIX + '/apply-promocode', { params })
}
const sendForm = async (data: SendFormData) => {
  return await api.post<SendFormReponse>(PREFIX + '/send-form', data)
}

export default {
  category,
  applyPromocode,
  sendForm
}
