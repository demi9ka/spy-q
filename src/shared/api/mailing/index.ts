import { api } from '..'
import { CheckResponse, DefaultParams, StartResposne, StatusReponse } from './types'

const PREFIX = '/mailing'

const start = async (params: DefaultParams) => {
  return await api.patch<StartResposne>(PREFIX + `/start/${params.mailingId}`)
}

const check = async (params: DefaultParams) => {
  return await api.get<CheckResponse>(PREFIX + `/check/${params.mailingId}`)
}

const status = async (params: DefaultParams) => {
  return await api.get<StatusReponse>(PREFIX + `/status/${params.mailingId}`)
}

export default {
  start,
  check,
  status
}
