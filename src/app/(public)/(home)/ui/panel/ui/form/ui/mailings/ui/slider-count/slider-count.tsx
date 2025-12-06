type Props = {
  mailingCount: number
}

const data: Record<any, any> = {
  '500': [0.2, 'start', -30],
  '1000': [1, 'center', -50],
  '1500': [2, 'center', -50],
  '2000': [2.8, 'end', -70]
}
export const SliderCount = ({ mailingCount }: Props) => {
  return (
    <div className='relative w-full h-[60.0px] md:h-[28.8px] lg:h-[36.8px] xl:h-[46.0px] 2xl:h-[60.0px]   mt-[10.0px] md:mt-[4.8px] lg:mt-[6.1px] xl:mt-[7.7px] 2xl:mt-[10.0px]'>
      <div
        style={{
          left: `${33.33333 * data[String(mailingCount)][0]}%`,
          alignItems: data[String(mailingCount)][1],
          transform: `translateX(${data[String(mailingCount)][2]}%)`,
          transition: '0.1s'
        }}
        className='font-medium text-[14.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]  absolute top-0 flex flex-col items-center '
      >
        <p>{mailingCount}</p>
        <p>площадок</p>
      </div>
    </div>
  )
}
