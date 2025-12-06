'use client'

import { Container } from '@/shared/ui/container'
import { Slider } from '@/components/ui/slider'
import { observer } from 'mobx-react-lite'
import { panelFormStore } from '@/store/panel-form.store'
import { Discount } from './ui/discount'
import { SliderCount } from './ui/slider-count/slider-count'

export const Mailings = observer(() => {
  const {
    formData: { mailingCount, category },
    setValue
  } = panelFormStore

  const volumePrice = mailingCount / 10 + (category.length > 1 ? ((category.length - 1) * mailingCount) / 20 : 0)
  const isDiscount = volumePrice > 0 && mailingCount > 1000
  const volumePriceDiscount = volumePrice * 0.9
  const finalPrice = isDiscount ? volumePriceDiscount : volumePrice

  return (
    <Container className='flex flex-col justify-between'>
      <h5 className=' font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px] mb-[10.0px] md:mb-[4.8px] lg:mb-[6.1px] xl:mb-[7.7px] 2xl:mb-[10.0px]'>
        Целевые площадки
      </h5>

      <Slider
        onValueChange={v => setValue('mailingCount', v[0])}
        defaultValue={[1000]}
        min={500}
        max={2000}
        step={500}
        mailingCount={mailingCount}
      />
      <SliderCount mailingCount={mailingCount} />
      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className=' font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Разделов:
        </p>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {category.length == 0 ? 0 : 1}
        </span>
      </div>
      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className='font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Дополнительных разделов:
        </p>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {category.length > 1 ? category.length - 1 : 0}
        </span>
      </div>
      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className='font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Выбрано:
        </p>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {mailingCount} площадок
        </span>
      </div>
      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className='font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Цена за {mailingCount}:
        </p>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {mailingCount / 10}$
        </span>
      </div>
      {category.length > 1 && (
        <>
          <div className='bg-black/20 w-full h-[1px] my-[4.0px] md:my-[1.9px] lg:my-[2.5px] xl:my-[3.1px] 2xl:my-[4.0px]' />
          <div className='flex items-center justify-between mt-[5px] md:mt-0'>
            <p className=' font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
              Скидка (50%):
            </p>
            <span className='text-green-500 font-medium  text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
              -{((category.length - 1) * mailingCount) / 20}$
            </span>
          </div>
          <div className='flex items-center justify-between mt-[5px] md:mt-0'>
            <p className=' font-medium text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
              Бонус площадки:
            </p>
            <span className='text-green-500 font-medium  text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
              +{(category.length - 1) * mailingCount}
            </span>
          </div>
        </>
      )}

      <div className='bg-black/20 w-full h-[1px] my-[4.0px] md:my-[1.9px] lg:my-[2.5px] xl:my-[3.1px] 2xl:my-[4.0px]' />

      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className=' font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          Итого площадок:
        </p>
        <span className='font-medium text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {mailingCount * (category.length > 0 ? category.length : 1)}
        </span>
      </div>
      <div className='flex items-center justify-between mt-[5px] md:mt-0'>
        <p className=' font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          К оплате:
        </p>
        <div className='flex items-center gap-[12.0px] md:gap-[5.8px] lg:gap-[7.4px] xl:gap-[9.2px] 2xl:gap-[12.0px]'>
          {isDiscount && (
            <>
              <span className='relative font-semibold text-accent text-[20.0px] md:text-[13.4px] lg:text-[17.2px] xl:text-[21.5px] 2xl:text-[28.0px]'>
                <Discount />
                {volumePriceDiscount}$
              </span>
            </>
          )}
          <span
            className={`font-semibold ${
              isDiscount
                ? 'text-black/40 line-through text-[14.0px] md:text-[9.6px] lg:text-[12.3px] xl:text-[15.3px] 2xl:text-[20.0px]'
                : 'text-accent text-[20.0px] md:text-[13.4px] lg:text-[17.2px] xl:text-[21.5px] 2xl:text-[28.0px]'
            } `}
          >
            {volumePrice}$
          </span>
        </div>
        {/* <span className='font-bold text-accent text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
          {finalPrice}$
        </span> */}
      </div>
    </Container>
  )
})
