import Link from 'next/link'

export const PageUrl = () => {
  return (
    <div className='hidden gap-2  md:flex text-accent text-[0.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'>
      <Link href={'/'} className='hover:underline'>
        Главная
      </Link>
      <span>/</span>
      <Link href={'/privacy'} className='hover:underline'>
        Политика конфиденциальности
      </Link>
    </div>
  )
}
