import { Checkbox } from '@/components/ui/checkbox'
import { panelFormStore } from '@/store/panel-form.store'
import { SubCategoryType } from '@/type'
import { observer } from 'mobx-react-lite'

type Props = SubCategoryType
export const SubCategory = observer(({ id, name }: Props) => {
  const {
    formData: { category },
    setValue
  } = panelFormStore

  return (
    <div className='flex items-center mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px]'>
      <div className='cursor-pointer flex items-center gap-[8.0px] md:gap-[3.8px] lg:gap-[4.9px] xl:gap-[6.1px] 2xl:gap-[8.0px] flex-2'>
        <h6 className='text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]'>{name}</h6>
        {/* <span className='text-black/60 font-normal text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {count}
        </span> */}
      </div>
      <Checkbox
        checked={category.includes(id)}
        onCheckedChange={state => {
          if (state === true) setValue('category', [...category, id])
          else {
            setValue(
              'category',
              category.filter(el => el !== id)
            )
          }
        }}
      />
    </div>
  )
})
