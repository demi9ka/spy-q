'use client'

import { Container } from '@/shared/ui/container'
import { CategoryItem } from './ui/category-item'
import { useCategory } from '@/entities/panel/use-category'
import { Skeleton } from '@/components/ui/skeleton'
import { observer } from 'mobx-react-lite'
import { panelFormStore } from '@/store/panel-form.store'

export const Category = observer(() => {
  const { search } = panelFormStore
  const { data, isLoading } = useCategory()

  const mappedCategories =
    data && !isLoading
      ? data
          .filter(el => {
            if (search.length) {
              return (
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.subCategories.some(subEl => subEl.name.toLowerCase().includes(search.toLowerCase()))
              )
            } else {
              return true
            }
          })
          .map(el => <CategoryItem key={el.id} {...el} />)
      : null

  return (
    <Container className=' h-[419.0px] md:h-[208.8px] lg:h-[266.8px] xl:h-[333.5px] 2xl:h-[435.0px] overflow-y-auto'>
      {mappedCategories ? (
        <div className='columns-1 md:columns-2 gap-x-[0.0px] md:gap-x-[66.2px] lg:gap-x-[84.6px] xl:gap-x-[105.8px] 2xl:gap-x-[138.0px]'>
          {mappedCategories}
        </div>
      ) : (
        <Skeleton className='w-full h-full' />
      )}
    </Container>
  )
})
