import Link from 'next/link'

export const NavbarDesktop = () => {
  return (
    <nav>
      <ul
        className='hidden md:flex items-center  font-medium
        md:gap-[25.0px] lg:gap-[31.9px] xl:gap-[39.9px] 2xl:gap-[52.0px]
           md:text-[11.5px] lg:text-[14.7px] xl:text-[18.4px] 2xl:text-[24.0px]'
      >
        <li>
          <Link href='/#panel' scroll={true}>
            Категории
          </Link>
        </li>
        <li>
          <Link href='/#FAQ' scroll={true}>
            FAQ
          </Link>
        </li>
        <li>
          <Link href='/privacy'>Политика конфиденциальности</Link>
        </li>
      </ul>
    </nav>
  )
}
