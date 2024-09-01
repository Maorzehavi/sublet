import React from 'react'
import Link from 'next/link'
import { RiHotelBedLine } from "react-icons/ri";
import { Button } from '../ui/button'

function Logo() {
    return (
        <Button size={'icon'} variant={'default'} className='rounded-full bg-slate-500 hover:bg-slate-800' asChild>
            <Link href={'/'}>
                <RiHotelBedLine className='w-6 h-6' />
            </Link>
        </Button>
    )
}

export default Logo