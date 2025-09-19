'use client'

type Props = {
  text: string
  variant: 'default' | 'outside'
  onClick?: () => void
}

export const Button = ({ text, variant, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`border-white border-2 ${
        variant == 'default' ? 'text-accent bg-white' : ''
      } font-semibold cursor-pointer
        w-full  md:w-[115.2px] lg:w-[140.8px] xl:w-[160.0px] 2xl:w-[240px]
        py-[7px] md:py-[5.3px] lg:py-[6.5px] xl:py-[7.3px] 2xl:py-[11px]
        text-[16px] md:text-[9.6px] lg:text-[11.7px] xl:text-[13.3px] 2xl:text-[20px]
        rounded-[16px] md:rounded-[7.7px] lg:rounded-[9.4px] xl:rounded-[10.7px] 2xl:rounded-[16px]
                `}
    >
      {text}
    </button>
  )
}
