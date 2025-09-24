import { ArrowUpLeft } from 'lucide-react'

export const Status = () => {
  return (
    <div
      className='flex flex-col justify-between h-30 md:h-auto  border-2 border-accent  grow-[2]
  rounded-[16.0px] md:rounded-[11.5px] lg:rounded-[14.7px] xl:rounded-[18.4px] 2xl:rounded-[24.0px]
  p-[16.0px] md:p-[11.5px] lg:p-[14.7px] xl:p-[18.4px] 2xl:p-[24.0px]
  pb-[10.0px] md:pb-[7.7px] lg:pb-[9.8px] xl:pb-[12.3px] 2xl:pb-[16.0px]
  pr-[10.0px] md:pr-[7.7px] lg:pr-[9.8px] xl:pr-[12.3px] 2xl:pr-[16.0px]'
    >
      <span className='text-accent text-[16.0px] md:text-[11.5px] lg:text-[14.7px] xl:text-[18.4px] 2xl:text-[24.0px] font-semibold'>
        Выберите категорию
      </span>

      <ArrowUpLeft className='text-accent  ml-auto size-[60.0px] md:size-[28.8px] lg:size-[36.8px] xl:size-[46.0px] 2xl:size-[60.0px] ' />
    </div>
  )
}
