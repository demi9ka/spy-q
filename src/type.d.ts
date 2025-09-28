export type SubCategoriesType = {
  id: string
  name: string
  count: number
}

export type CategoryType = {
  id: string
  name: string
  count: number
  subCategories: SubCategoriesType[]
}
