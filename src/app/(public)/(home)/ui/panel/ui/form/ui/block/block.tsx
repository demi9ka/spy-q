import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Block = ({ className, ...props }: Props) => {
  return <div className=''></div>
}
