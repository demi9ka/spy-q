import { Section } from '@/shared/ui/section'
import { NavbarDesktop, NavbarMobile } from './ui/navbar'

export const Header = () => {
  return (
    <header className='fixed z-30 top-0 left-0 w-full bg-[var(--accent)]  text-[var(--light)]'>
      <Section className='py-4 md:py-[8px] lg:py-[10.6px] xl:py-[13.3px] 2xl:py-5 max-w-[1640px]'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <NavbarMobile />
            <h2
              className={`text-[24.0px] md:text-[15.4px] lg:text-[19.6px] xl:text-[24.5px] 2xl:text-[32.0px] font-bold mr-16 md:mr-[40px] lg:mr-[53px] xl:mr-[66px] 2xl:mr-25`}
            >
              SpyQ
            </h2>
            <NavbarDesktop />
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
