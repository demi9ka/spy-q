export type SubCategoryType = {
  id: string
  name: string
  count: number
}

export type CategoryType = {
  id: string
  name: string
  count: number
  subCategory: SubCategoryType[]
}
