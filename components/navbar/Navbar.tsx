import React from 'react'
import NavSerach from './NavSerach'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'
import Logo from './Logo'

function Navbar() {
    return (
        <nav className='border-b'>
            <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-8'>
                {/* Small screens layout */}
                <div className='sm:hidden'>
                <div className='flex gap-4 justify-between pb-4'>
                <Logo />
                <div className='gap-4 items-center flex'>

                    <DarkMode />
                    <LinksDropdown />
                </div>
                </div>
                <NavSerach />
            </div>

                {/* Medium and larger screens layout */}
                <div className='hidden sm:flex sm:flex-row sm:justify-between sm:items-center gap-4 w-full'>
                    <Logo />
                    <NavSerach />
                    <div className='flex gap-4 items-center'>
                        <DarkMode />
                        <LinksDropdown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
