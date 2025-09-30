import { api } from '..'
import { CategoryResponse } from './types'

const PREFIX = '/panel'

const category = async () => {
  return await api.get<CategoryResponse>(PREFIX + '/category')
}

export default {
  category
}
