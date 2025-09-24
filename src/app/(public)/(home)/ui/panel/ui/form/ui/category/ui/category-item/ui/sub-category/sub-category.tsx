import { Checkbox } from '@/components/ui/checkbox'
import { SubCategoryType } from '@/type'

type Props = SubCategoryType
export const SubCategory = ({ count, id, name }: Props) => {
  return (
    <div className='flex items-center mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px]'>
      <div className='cursor-pointer flex items-center gap-[8.0px] md:gap-[3.8px] lg:gap-[4.9px] xl:gap-[6.1px] 2xl:gap-[8.0px] flex-2'>
        <h5 className=' text-[14.0px] md:text-[6.7px] lg:text-[8.6px] xl:text-[10.7px] 2xl:text-[14.0px]'>{name}</h5>
        <span className='text-black/60 font-normal text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {count}
        </span>
      </div>
      <Checkbox
        onCheckedChange={state => {
          console.log(state)
        }}
      />
    </div>
  )
}
