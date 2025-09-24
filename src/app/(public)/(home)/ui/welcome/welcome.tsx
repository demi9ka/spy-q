import { Section } from '@/shared/ui/section'
import Image from 'next/image'
import { ButtonContainer } from './ui/buttons-container'

export const Welcome = () => {
  return (
    <div className='pt-41 md:pt-19 pb-33 md:pb-14  bg-accent text-[var(--light)]'>
      <Section className='max-w-[1640px]'>
        <div className='flex justify-center  items-center'>
          <div>
            <h1
              className='font-bold
             text-[36px] md:text-[25.0px] lg:text-[30.5px] xl:text-[34.7px] 2xl:text-[52px]'
              style={{ lineHeight: '120%' }}
            >
              Ищите клиентов для своего бизнеса?
            </h1>
            <h2
              className='font-medium 
            my-[24px] md:my-[17.6px] lg:my-[23.5px] xl:my-[29.3px] 2xl:my-[44px]
          text-[16px] md:text-[11.5px] lg:text-[14.1px] xl:text-[16.0px] 2xl:text-[24px]
            '
            >
              Мы найдем и свяжемся с ними за вас
            </h2>
            <ButtonContainer />
          </div>
          <Image
            src={'/planet.webp'}
            alt='planet'
            width={990}
            height={821}
            className='hidden md:block
       w-[0px] md:w-[475.2px] lg:w-[580.8px] xl:w-[660.0px] 2xl:w-[990px]
         h-[0px] md:h-[394.1px] lg:h-[481.7px] xl:h-[547.3px] 2xl:h-[821px]'
          />
        </div>
      </Section>
    </div>
  )
}
