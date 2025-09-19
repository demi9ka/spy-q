type Props = {
  title: string
  content: string
  className?: string
}

export const Block = ({ content, title, className }: Props) => {
  return (
    <div
      className={`w-full bg-[var(--container)]  shadow
     rounded-[16px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16px]
      p-[16px] md:p-[7.7px] lg:p-[9.8px] xl:p-[11.7px] 2xl:p-[16px] ${className ?? ''}`}
    >
      <h5
        className='font-semibold
         text-[18px] md:text-[11.5px] lg:text-[14.7px] xl:text-[17.6px] 2xl:text-[24px]
          '
      >
        {title}
      </h5>
      <p
        style={{ lineHeight: '130%' }}
        className=' 
          mt-[16px] md:mt-[7.7px] lg:mt-[9.8px] xl:mt-[11.7px] 2xl:mt-[16px]
         text-[14px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.2px] 2xl:text-[18px]'
      >
        {content}
      </p>
    </div>
  )
}
