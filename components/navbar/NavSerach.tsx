import React from 'react'
import { Input } from '../ui/input'

function NavSerach() {
  return (
    <Input type='search' className='max-w-sm  dark:bg-muted border border-primary mx-auto md:max-w-lg text-center' placeholder='find a property...'/>
  )
}

export default NavSerach