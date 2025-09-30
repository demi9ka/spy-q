import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  className?: string
}

export const Block = ({ children, title, className }: Props) => {
  return (
    <div
      className={`w-full bg-[var(--container)]  shadow
     rounded-[16px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16px]
      p-[16px] md:p-[7.7px] lg:p-[9.8px] xl:p-[11.7px] 2xl:p-[16px] ${className ?? ''}`}
    >
      <h5
        className='font-semibold
        text-[20.0px] md:text-[12.5px] lg:text-[15.9px] xl:text-[19.9px] 2xl:text-[26.0px]'
      >
        {title}
      </h5>
      <div
        style={{ lineHeight: '130%' }}
        className='  mt-[16px] md:mt-[7.7px] lg:mt-[9.8px] xl:mt-[11.7px] 2xl:mt-[16px]
       text-[16.0px] md:text-[9.6px] lg:text-[12.3px] xl:text-[15.3px] 2xl:text-[20.0px]'
      >
        {children}
      </div>
    </div>
  )
}
