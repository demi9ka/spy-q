import Link from 'next/link'
import { Section } from '../section'

export const Footer = () => {
  return (
    <footer className='shrink-0 w-full bg-white relative z-[2]'>
      <Section className='py-4 md:py-[8px] lg:py-[10.6px] xl:py-[13.3px] 2xl:py-5 max-w-[1640px]'>
        <div className='flex justify-between  items-center flex-col md:flex-row gap-6 md:gap-0'>
          <Link href={'/'}>
            <h2
              className={`text-accent text-2xl md:text-[12.8px] lg:text-[17px] xl:text-[24.3px] 2xl:text-[32px] font-bold`}
            >
              SpyQ
            </h2>
          </Link>
          <div className='flex items-center flex-col md:flex-row gap-[20.0px] md:gap-[9.6px] lg:gap-[12.3px] xl:gap-[15.3px] 2xl:gap-[20.0px]'>
            <Link
              href='/privacy'
              className='underline text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]'
            >
              Политика конфиденциальности
            </Link>
            <span className='text-[18px] md:text-[8.6px] lg:text-[10.6px] xl:text-[12.0px] 2xl:text-[18px]'>
              © 2025 SpyQ. Все права защищены.
            </span>
          </div>
        </div>
      </Section>
    </footer>
  )
}
