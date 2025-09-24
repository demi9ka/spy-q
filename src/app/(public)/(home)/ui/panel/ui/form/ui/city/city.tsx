'use client'

import { Container } from '../container'
import { MapPin } from 'lucide-react'

export const City = () => {
  return (
    <Container>
      <h5 className=' mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px] font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
        Город <span className='text-accent'>*</span>
      </h5>
      <div
        className='flex items-center bg-[#f1f1f1] w-full 
      py-[13.5px] md:py-[6.5px] lg:py-[8.3px] xl:py-[10.3px] 2xl:py-[13.5px] 
      px-[16.0px] md:px-[7.7px] lg:px-[9.8px] xl:px-[12.3px] 2xl:px-[16.0px]
       rounded-[16.0px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16.0px]
       gap-[8.0px] md:gap-[3.8px] lg:gap-[4.9px] xl:gap-[6.1px] 2xl:gap-[8.0px]'
      >
        <MapPin className='text-accent size-[24.0px] md:size-[11.5px] lg:size-[14.7px] xl:size-[18.4px] 2xl:size-[24.0px]' />
        <input
          placeholder='Введите нужный город для рассылки'
          className=' resize-none font-inter w-full outline-0 text-[14.0px] md:text-[7.2px] lg:text-[9.2px] xl:text-[11.5px] 2xl:text-[15.0px]'
          style={{ fontFamily: 'var(--font-inter-sans)' }}
        />
      </div>
    </Container>
  )
}
