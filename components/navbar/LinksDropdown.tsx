import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import {  LuAlignRight } from 'react-icons/lu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import UserIcon from './UserIcon'
import { links } from '@/utils/links'
import SignOutLink from './SignOutLink'


function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <UserIcon />
          <LuAlignRight className='w-6 h-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='center' sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='capitalize w-full'>
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown