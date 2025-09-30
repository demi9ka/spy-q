import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const Textarea = ({ className, ...props }: Props) => {
  return (
    <textarea
      className='bg-[#f1f1f1] w-full grow-[2] resize-none font-inter
    text-[15.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]
    rounded-[16.0px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16.0px]
    px-[16.0px] md:px-[7.7px] lg:px-[9.8px] xl:px-[12.3px] 2xl:px-[16.0px]
    py-[6.0px] md:py-[3.4px] lg:py-[4.3px] xl:py-[5.4px] 2xl:py-[7.0px]'
      {...props}
    />
  )
}
