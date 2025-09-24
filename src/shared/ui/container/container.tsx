import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Container = ({ className, children, ...props }: Props) => {
  return (
    <div
      className={`shadow bg-[var(--container)]
  p-[16.0px] md:p-[11.5px] lg:p-[14.7px] xl:p-[18.4px] 2xl:p-[24.0px]
 rounded-[16.0px] md:rounded-[11.5px] lg:rounded-[14.7px] xl:rounded-[18.4px] 2xl:rounded-[24.0px] ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
