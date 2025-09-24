'use client'

import { Container } from '../container'
import { category } from './constants'
import { CategoryItem } from './ui/category-item'

export const Category = () => {
  // const mappedCategory = category

  return (
    <Container className='h-[419.0px] md:h-[208.8px] lg:h-[266.8px] xl:h-[333.5px] 2xl:h-[435.0px] overflow-y-auto'>
      <div className='columns-1 md:columns-2 gap-x-[0.0px] md:gap-x-[66.2px] lg:gap-x-[84.6px] xl:gap-x-[105.8px] 2xl:gap-x-[138.0px]'>
        {category.map(el => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </Container>
  )
}
