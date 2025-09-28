import { api } from '..'
import { loadResponse } from './types'

const PREFIX = '/category'

const load = async () => {
  return await api.get<loadResponse>(PREFIX)
}

export default {
  load
}
