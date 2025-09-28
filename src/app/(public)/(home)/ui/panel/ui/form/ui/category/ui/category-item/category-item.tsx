import { useMemo, useState } from 'react'
import { CategoryType } from '@/type'
import { ChevronUp } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { SubCategory } from './ui/sub-category'

type Props = CategoryType

export const CategoryItem = ({ count, id, name, subCategories }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const mappedSubCategory = useMemo(() => subCategories.map(el => <SubCategory key={el.id} {...el} />), [])

  return (
    <div className='break-inside-avoid border-b mb-[22.0px] md:mb-[10.6px] lg:mb-[13.5px] xl:mb-[16.9px] 2xl:mb-[22.0px]'>
      <div className='flex items-center py-[12.0px] md:py-[5.8px] lg:py-[7.4px] xl:py-[9.2px] 2xl:py-[12.0px]'>
        <div
          onClick={toggleOpen}
          className='cursor-pointer flex items-center gap-[8.0px] md:gap-[3.8px] lg:gap-[4.9px] xl:gap-[6.1px] 2xl:gap-[8.0px] flex-2'
        >
          <h4 className='font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
            {name}
          </h4>
          <span className='text-black/60 font-normal text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
            {count}
          </span>
          <ChevronUp
            className={`text-accent transition-transform w-[18.0px] md:w-[8.6px] lg:w-[11.0px] xl:w-[13.8px] 2xl:w-[18.0px] 
            h-[18.0px] md:h-[8.6px] lg:h-[11.0px] xl:h-[13.8px] 2xl:h-[18.0px] ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        <Checkbox
          onCheckedChange={state => {
            console.log(state)
          }}
        />
      </div>

      {isOpen && mappedSubCategory}
    </div>
  )
}
