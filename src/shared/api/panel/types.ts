import { CategoryType, FormDataType } from '@/type'

export type CategoryResponse = CategoryType[]
export type ApplyPromocodeResponse = {
  result: boolean
}
export type ApplyPromocodeParams = {
  promocode: string
}

export type SendFormData = {
  promocode?: string
  data: FormDataType
}
export type SendFormReponse = {
  id: string
  link?: string
}
