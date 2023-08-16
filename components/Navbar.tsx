import React from 'react'
import Link from 'next/link'
import {HiLanguage} from 'react-icons/hi2'
import Image from 'next/image'
import { ModeToggle } from './Theme'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out max-w-7xl mx-auto px-10'>
        <nav className='flex justify-between items-center py-4'>
          <div className='dark:hidden logo'>logo</div>
          <div className='hidden dark:flex logo'>logo</div>

          <div className='Navlinks sm:flex hidden'>
            <ol className='flex lg:gap-x-10 gap-x-5 text-sm'>
                <li className='dark:text-pink-300'>home</li>
                <li className='dark:text-red-300'>Services</li>
                <li className='dark:text-blue-300'>Work</li>
                <li>Prices</li>
                <li className='dark:text-green-300'>Resources</li>
            </ol> {/* Iqra yay temporary hai : Dark mode classes working ✔  */}
          </div>

          <div className='Customizer flex items-center  gap-x-5 px-3'>
            <div className='flex gap-x-5 items-center'>
                <div><HiLanguage className='h-5 w-5'/></div>
                <div><ModeToggle/></div>
            </div>
            <div className='hidden sm:flex'>Login</div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar