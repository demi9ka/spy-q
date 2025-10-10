import { Metadata } from 'next'
import { HowWork } from './ui/how-work/how-work'
import { Modals } from './ui/modals'
import { Panel } from './ui/panel'
import { Questions } from './ui/questions/questions'
import { Welcome } from './ui/welcome/welcome'

export const metadata: Metadata = {
  title: 'SpyQ',
  description: 'Описание'
}

export default () => {
  return (
    <>
      <div className='md:h-[100svh]  [@media(min-width:1920px)]:h-auto relative md:fixed [@media(min-width:1920px)]:relative z-[2] pt-[164.0px] md:pt-[36.5px] lg:pt-[46.6px] xl:pt-[58.3px] 2xl:pt-[76.0px] pb-33 md:pb-14  bg-accent text-[var(--light)] w-full'>
        <Welcome />
      </div>

      <div className='md:mt-[100svh] [@media(min-width:1920px)]:mt-0 bg-[var(--bg)] pt-[42.0px] md:pt-[20.2px] lg:pt-[25.8px] xl:pt-[32.2px] 2xl:pt-[42.0px] relative z-[3]'>
        <Panel />
        <HowWork />
        <Questions />
      </div>
      <Modals />
    </>
  )
}
