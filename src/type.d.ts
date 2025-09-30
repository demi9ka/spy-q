export type SubCategoryType = {
  id: string
  name: string
  count: number
}

export type CategoryType = {
  id: string
  name: string
  count: number
  subCategories: SubCategoryType[]
}

export type FormDataType = {
  proposal: string
  contact: string
  mailingCount: number
  city: string
  category: string[]
}
