'use client'

import { panelFormStore } from '@/store/panel-form.store'
import { ArrowUpLeft } from 'lucide-react'
import { observer } from 'mobx-react-lite'

const statusTitle: string[] = ['Выберите категории', 'Заполните поля и выберите город', 'Оплатить и запустить рассылку']

export const Status = observer(() => {
  const {
    formData: { category, city, contact, proposal, mailingCount }
  } = panelFormStore

  const isSelectedCategory = category.length > 0
  const isFullFilled = [city, contact, proposal].every(el => el.length > 0)
  const status = isSelectedCategory ? (isFullFilled ? 2 : 1) : 0
  const price = mailingCount / 10 + category.length * 2

  return (
    <button
      type='submit'
      className={`flex flex-col justify-between h-30 md:h-auto  border-2 border-accent   grow-[2] ${
        status == 2 && 'bg-accent cursor-pointer'
      }  
      transition-colors delay-100
        rounded-[16.0px] md:rounded-[11.5px] lg:rounded-[14.7px] xl:rounded-[18.4px] 2xl:rounded-[24.0px]
        p-[16.0px] md:p-[11.5px] lg:p-[14.7px] xl:p-[18.4px] 2xl:p-[24.0px]
        pb-[10.0px] md:pb-[7.7px] lg:pb-[9.8px] xl:pb-[12.3px] 2xl:pb-[16.0px]
        pr-[10.0px] md:pr-[7.7px] lg:pr-[9.8px] xl:pr-[12.3px] 2xl:pr-[16.0px]`}
    >
      <span
        className={`text-${
          status == 2 ? 'white' : 'accent'
        } text-left text-[16.0px] md:text-[11.5px] lg:text-[14.7px] xl:text-[18.4px] 2xl:text-[24.0px] font-semibold`}
      >
        {statusTitle[status]}
      </span>
      <div className='flex justify-between items-end'>
        <div>
          {status == 2 && (
            <span className='text-white font-semibold md:font-bold text-[20.0px] md:text-[15.4px] lg:text-[19.6px] xl:text-[24.5px] 2xl:text-[32.0px] '>
              {price}$
            </span>
          )}
        </div>
        <div>
          <ArrowUpLeft
            style={{
              transform: `rotate(${status * 45}deg)`
            }}
            className={`duration-50 text-${
              status == 2 ? 'white' : 'accent'
            } size-[60.0px] md:size-[28.8px] lg:size-[36.8px] xl:size-[46.0px] 2xl:size-[60.0px]`}
          />
        </div>
      </div>
    </button>
  )
})
