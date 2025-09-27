import { Section } from '@/shared/ui/section'
import { SearchCategory } from './ui/search-category'
import { Form } from './ui/form/form'

export const Panel = () => {
  return (
    <Section
      id='panel'
      className='max-w-[1640px] scroll-mt-30mt-[24.0px] md:mt-[28.8px] lg:mt-[36.8px] xl:mt-[46.0px] 2xl:mt-[60.0px]'
    >
      <div className='flex-col md:flex-row flex md:items-end justify-between'>
        <div>
          <h3
            className='font-semibold 
          text-[24px] md:text-[18.2px] lg:text-[23.3px] xl:text-[29.1px] 2xl:text-[38px]'
          >
            Находите клиентов в пару кликов
          </h3>
          <h4
            className='mb-6 md:mb-0 text-[16px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18px]
          mt-[17px] md:mt-[8.2px] lg:mt-[10.4px] xl:mt-[13.0px] 2xl:mt-[17px]'
          >
            Просто выберите категории и отправьте им свое предложение
          </h4>
        </div>
        <SearchCategory />
      </div>
      <Form />
    </Section>
  )
}
