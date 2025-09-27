import Link from 'next/link'

export const NavbarDesktop = () => {
  return (
    <nav>
      <ul className='hidden md:flex items-center  gap-5 lg:gap-7 xl:gap-8 2xl:gap-13 font-medium text-lg md:text-[9.6px] lg:text-[12.8px] xl:text-lg 2xl:text-2xl'>
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
