import { Category } from './ui/category'

export const Form = () => {
  return (
    <div className=''>
      <Category />
      <div
        className='flex flex-row  md:flex-col mt md:h-[151.7px] lg:h-[193.8px] xl:h-[242.3px] 2xl:h-[316.0px]
        mt-[28.0px] md:mt-[13.4px] lg:mt-[17.2px] xl:mt-[21.5px] 2xl:mt-[28.0px]'
      >
        <Fields />
        <Count />
        <div className='h-full flex flex-1'>
          <City />
          <Status />
        </div>
      </div>
    </div>
  )
}
