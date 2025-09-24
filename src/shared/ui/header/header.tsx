import Link from 'next/link'
import { Section } from '@/shared/ui/section'

export const Header = () => {
  return (
    <header className='fixed z-30 top-0 left-0 w-full bg-[var(--accent)]  text-[var(--light)]'>
      <Section className='py-4 md:py-[8px] lg:py-[10.6px] xl:py-[13.3px] 2xl:py-5 max-w-[1640px]'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <h2
              className={`text-2xl md:text-[12.8px] lg:text-[17px] xl:text-[24.3px] 2xl:text-[32px] font-bold mr-16 md:mr-[40px] lg:mr-[53px] xl:mr-[66px] 2xl:mr-25`}
            >
              SpyQ
            </h2>
            <div className='hidden md:flex items-center  gap-5 lg:gap-7 xl:gap-8 2xl:gap-13 font-medium text-lg md:text-[9.6px] lg:text-[12.8px] xl:text-lg 2xl:text-2xl'>
              <Link href='/#panel' scroll={true}>
                Категории
              </Link>
              <Link href='/#FAQ' scroll={true}>
                FAQ
              </Link>
              <Link href='/privacy'>Политика конфиденциальности</Link>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='py-[7px] md:py-[4.4px] lg:py-[5.8px] xl:py-[7.33px] 2xl:py-[11px] rounded-[16px] md:rounded-[6.4px] lg:rounded-[8.533px] xl:rounded-[10.6px] 2xl:rounded-[16px]  bg-white text-accent font-semibold w-43 md:w-20 lg:w-26 xl:w-33 2xl:w-50  text-[16px] md:text-[8px] lg:text-[10.6px] xl:text-sm 2xl:text-[20px]'>
              Поддержка
            </button>
          </div>
        </div>
      </Section>
    </header>
  )
}
