import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export const Back = () => {
  return (
    <Link
      className='md:hidden shadow rounded-full bg-[var(--container)] size-8 flex justify-center items-center'
      href={'/'}
    >
      <ChevronLeft className='text-accent size-full' />
    </Link>
  )
}
