import { Container } from '@/shared/ui/container'
import { Textarea } from './ui/textarea'

export const Fields = () => {
  return (
    <Container className='flex flex-col'>
      <h5 className=' mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px] font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
        Ваше предложение <span className='text-accent'>*</span>
      </h5>
      <Textarea
        placeholder='Опишите предложение'
        className='h-[49.0px] md:h-[38.9px] lg:h-[49.7px] xl:h-[62.1px] 2xl:h-[81.0px] '
        style={{ fontFamily: 'var(--font-inter-sans)' }}
      />
      <h5 className='mt-[16.0px] md:mt-[7.7px] lg:mt-[9.8px] xl:mt-[12.3px] 2xl:mt-[16.0px] mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px] font-semibold text-[18.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
        Ваше предложение <span className='text-accent'>*</span>
      </h5>
      <Textarea
        placeholder='Укажите сайт, почту номер телефона или никнейм Telegram'
        className='h-[49.0px] md:h-[38.9px] lg:h-[49.7px] xl:h-[62.1px] 2xl:h-[81.0px] '
        style={{ fontFamily: 'var(--font-inter-sans)' }}
      />
    </Container>
  )
}
