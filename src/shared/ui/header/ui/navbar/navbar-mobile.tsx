'use client'

import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import Link from 'next/link'

export const NavbarMobile = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <DropdownMenu onOpenChange={state => setIsOpened(state)}>
      <DropdownMenuTrigger className='md:hidden '>
        <Menu
          className='size-6 mr-4   transition-transform duration-200'
          style={{
            rotate: `${isOpened ? 90 : 0}deg`
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='text-md mt-6 ml-2'>
        <nav>
          <ul>
            <DropdownMenuItem className='w-[200px]'>
              <li>
                <Link href={'/#panel'}> Категории</Link>
              </li>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <li>
                <Link href={'/#FAQ'}>FAQ</Link>
              </li>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>
              <li>
                <Link href={'/privacy'}>Политика конфиденциальности</Link>
              </li>
            </DropdownMenuItem> */}
          </ul>
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
