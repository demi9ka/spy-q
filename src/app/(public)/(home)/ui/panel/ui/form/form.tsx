'use client'

import { Category } from './ui/category'
import { City } from './ui/city'
import { Fields } from './ui/fields'
import { Mailings } from './ui/mailings'
import { Status } from './ui/status'

export const Form = () => {
  return (
    <div className='mt-[32.0px] md:mt-[17.3px] lg:mt-[22.1px] xl:mt-[27.6px] 2xl:mt-[36.0px]'>
      <Category />
      <div
        className='grid grid-cols-1 md:grid-cols-3 md:h-[151.7px] lg:h-[193.8px] xl:h-[242.3px] 2xl:h-[316.0px]
        mt-[28.0px] md:mt-[13.4px] lg:mt-[17.2px] xl:mt-[21.5px] 2xl:mt-[28.0px] 
        gap-x-[0px] gap-y-[28px] md:gap-x-[13.4px] lg:gap-x-[17.2px] xl:gap-x-[21.5px] 2xl:gap-x-[28.0px]'
      >
        <Fields />
        <Mailings />
        <div className='h-full flex flex-col gap-[16.0px] md:gap-[7.7px] lg:gap-[9.8px] xl:gap-[12.3px] 2xl:gap-[16.0px]'>
          <City />
          <Status />
        </div>
      </div>
    </div>
  )
}
