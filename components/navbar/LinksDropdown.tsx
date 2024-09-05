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
import {SignedIn, SignedOut, SignInButton, SignUpButton} from '@clerk/nextjs'


function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px] '>
          <UserIcon />
          <LuAlignRight className='w-6 h-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='center' sideOffset={10}>
    <SignedOut>
      <DropdownMenuItem>
        <SignInButton mode='modal'>
          <button className='w-full text-left  hover:translate-x-2'>Login</button>
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignUpButton mode='modal'>
          <button className='w-full text-left  hover:translate-x-2'>Register</button>
        </SignUpButton>
      </DropdownMenuItem>
    </SignedOut>
    <SignedIn>
      {links.map((link) => {
        return (
          <DropdownMenuItem key={link.href} className=' hover:translate-x-2'>
            <Link href={link.href} className='capitalize w-full'>
              {link.label}
            </Link>
          </DropdownMenuItem>
        );
      })}
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignOutLink />
      </DropdownMenuItem>
    </SignedIn>
  </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown