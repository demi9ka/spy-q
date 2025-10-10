'use client'

import { useScrollTo } from '@/hooks/use-scroll-to'
import { Button } from './ui/button'
import { toast } from 'sonner'

export const ButtonContainer = () => {
  const { scrollToSection } = useScrollTo()
  return (
    <div
      className='flex flex-col md:flex-row items-center 
        gap-[16px] md:gap-[17.6px] lg:gap-[23.5px] xl:gap-[29.3px] 2xl:gap-[44px]'
    >
      <Button
        text='Найти клиентов'
        onClick={() => {
          scrollToSection('panel')
        }}
        variant='default'
      />
      <Button text='Как это работает' onClick={() => scrollToSection('how-work')} variant='outside' />
    </div>
  )
}
