import React from 'react'
import Link from 'next/link'
import { HiLanguage } from 'react-icons/hi2'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BsShop } from 'react-icons/bs'
import { SlDocs } from 'react-icons/sl'
import Image from 'next/image'
import { ModeToggle } from './Theme'
import Logo from './Logo'
import LocaleSwitcher from './local-switcher'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between'>
      <nav className='flex justify-between items-center w-full py-4'>
        <Logo/>
        <div className='Navlinks sm:flex hidden'>
          <ol className='flex justify-center items-center md:gap-x-10 sm:gap-x-6 text-xs'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <BiHomeAlt2 className="w-5 h-5" />
              <li>Home</li>
            </Link>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <MdWorkOutline className='w-5 h-5'/>
              <li>Work</li>
            </Link>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <BsCreditCard2Back className='w-5 h-5'/>
              <li>Prices</li>
            </Link>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <BsShop className='w-5 h-5'/>
              <li>Store</li>
            </Link>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <SlDocs className='w-5 h-5'/>
              <li>Resources</li>
            </Link>
          </ol>
        </div>

        <div className='Customizer flex items-center  gap-x-5 px-3'>
          <div className='flex gap-x-5 items-center'>
            {/* <div><HiLanguage className='h-5 w-5' /></div> */}
            <div><LocaleSwitcher /></div>
            <div><ModeToggle /></div>
          </div>
          <div className='hidden sm:flex'>Login</div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar