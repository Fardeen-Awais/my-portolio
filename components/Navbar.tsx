import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='sticky bg-white top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out '>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-10 py-4'>
          <div className='logo'>logo</div>

          <div className='Navlinks sm:flex hidden'>
            <ol className='flex gap-x-4 sm:ml-10 sm:gap-x-8 text-sm'>
                <li>home</li>
                <li>Services</li>
                <li>Work</li>
                <li>Prices</li>
                <li>Resources</li>
            </ol>
          </div>

          <div className='Customizer flex gap-8 px-3'>
            <div className='flex gap-6'>
                <div>Icon</div>
                <div>Icon</div>
            </div>
            <div className='hidden sm:flex'>Login</div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar