import { Section } from '@/shared/ui/section'
import { Block } from './ui/block'
import { DATA } from './constants'

export const HowWork = () => {
  return (
    <Section
      id='how-work'
      className='
        mt-[32px] md:mt-[34.6px] lg:mt-[42.2px] xl:mt-[48.0px] 2xl:mt-[72px]
        mb-[24px] md:mb-[24.0px] lg:mb-[29.3px] xl:mb-[33.3px] 2xl:mb-[50px]
        w-full md:w-[528.0px] lg:w-[645.3px] xl:w-[733.3px] 2xl:w-[1100px]
         scroll-mt-30
        '
    >
      <h3 className='text-center font-semibold text-[24px] md:text-[18.2px] lg:text-[22.3px] xl:text-[25.3px] 2xl:text-[38px]'>
        Как работает система SpyQ?
      </h3>
      <div
        className='flex flex-col 
      gap-[16px] md:gap-[7.7px] lg:gap-[9.4px] xl:gap-[10.7px] 2xl:gap-[16px]
        mt-[24px] md:mt-[11.5px] lg:mt-[14.1px] xl:mt-[16.0px] 2xl:mt-[24px]'
      >
        {DATA.map(({ content, title }, i) => (
          <Block key={i} title={title} content={content} className={`${i == 2 ? 'bg-accent text-white' : ''}`} />
        ))}
      </div>
    </Section>
  )
}
