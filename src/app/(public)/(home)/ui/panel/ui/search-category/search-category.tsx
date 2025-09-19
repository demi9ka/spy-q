'use client'

import { Search } from 'lucide-react'

export const SearchCategory = () => {
  return (
    <h3
      className='bg-white shadow flex  items-center
  w-full md:w-[171.8px] lg:w-[219.6px] xl:w-[274.5px] 2xl:w-[358px]
 pl-[16px] md:pl-[7.7px] lg:pl-[9.8px] xl:pl-[12.3px] 2xl:pl-[16px]
  rounded-[16px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16px]'
    >
      <Search
        color='var(--accent)'
        className='
      h-[24px] md:h-[11.5px] lg:h-[14.7px] xl:h-[18.4px] 2xl:h-[24px]
      w-[24px] md:w-[11.5px] lg:w-[14.7px] xl:w-[18.4px] 2xl:w-[24px]'
      />
      <input
        type='text'
        placeholder='Поиск по категориям'
        className='
        grow-[2]
        outline-0
      text-[16px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18px]
      py-[15.5px] md:py-[7.0px] lg:py-[8.9px] xl:py-[11.1px] 2xl:py-[14.5px]
      pl-[8.0px] md:pl-[3.8px] lg:pl-[4.9px] xl:pl-[6.1px] 2xl:pl-[8.0px]'
      />
    </h3>
  )
}
