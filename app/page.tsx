import { Button } from '@/components/ui/button'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <Button variant={'outline'} size={'lg'} className='capitalize m-6' >Click me</Button>
    </div>
  )
}

export default HomePage