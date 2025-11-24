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
    <div
      onClick={() => {
        const state = !category.includes(id)

        if (state === true) setValue('category', [...category, id])
        else {
          setValue(
            'category',
            category.filter(el => el !== id)
          )
        }
      }}
      className=' flex items-center justify-between pb-[12.0px] md:pb-[5.8px] lg:pb-[7.4px] xl:pb-[9.2px] 2xl:pb-[12.0px]'
    >
      <h6 className='text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]'>{name}</h6>

      <Checkbox checked={category.includes(id)} />
    </div>
  )
})
