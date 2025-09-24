import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Section = ({ children, className, ...props }: Props) => {
  return (
    <div className={`px-4 sm:px-5 mx-auto  ${className ? className : ''}`} {...props}>
      {children}
    </div>
  )
}
