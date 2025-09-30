'use client'

import { Container } from '@/shared/ui/container'
import { Slider } from '@/components/ui/slider'
import { observer } from 'mobx-react-lite'
import { panelFormStore } from '@/store/panel-form.store'

export const Mailings = observer(() => {
  const {
    formData: { mailingCount, category },
    setValue
  } = panelFormStore

  const volumePrice = mailingCount / 10
  const categoryPrice = category.length * 2

  return (
    <Container className='flex flex-col'>
      <div className='flex items-center justify-between  mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px]'>
        <h5 className=' font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Объём рассылок: {mailingCount}
        </h5>
        <span className='font-semibold text-accent text-[20.0px] md:text-[13.4px] lg:text-[17.2px] xl:text-[21.5px] 2xl:text-[28.0px]'>
          {volumePrice}$
        </span>
      </div>
      <Slider
        onValueChange={v => setValue('mailingCount', v[0])}
        defaultValue={[1000]}
        min={500}
        max={3500}
        step={500}
      />
      <div className='border-b border-black/20 pb-[10px] flex justify-between items-center mt-[24.0px] md:mt-[11.5px] lg:mt-[14.7px] xl:mt-[18.4px] 2xl:mt-[24.0px]  '>
        <h5 className='font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Выбрано категорий: {category.length}
        </h5>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {categoryPrice}$
        </span>
      </div>
      <div
        className='flex items-end mt-[24.0px] md:mt-[11.5px] lg:mt-[14.7px] xl:mt-[18.4px] 2xl:mt-[24.0px]  justify-between'
        style={{ flexGrow: 2 }}
      >
        <h5 className=' font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Итого:
        </h5>
        <span className='font-semibold text-accent text-[20.0px] md:text-[13.4px] lg:text-[17.2px] xl:text-[21.5px] 2xl:text-[28.0px]'>
          {volumePrice + categoryPrice}$
        </span>
      </div>
    </Container>
  )
})
