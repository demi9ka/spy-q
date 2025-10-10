import { api } from '..'
import { DefaultParams, CheckResponse, LinkResponse } from './types'

const PREFIX = '/payment'

const check = async (params: DefaultParams) => {
  return await api.get<CheckResponse>(PREFIX + `/check/${params.mailingId}`)
}

const link = async (params: DefaultParams) => {
  return await api.get<LinkResponse>(PREFIX + `/link/${params.mailingId}`)
}

export default {
  check,
  link
}
