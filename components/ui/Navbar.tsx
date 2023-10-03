'use client'
import React, { useEffect, useState } from 'react'
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
import { SignInButton, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
const Navbar = () => {

  const { isSignedIn } = useUser();
  
  const [isMounted, setIsMounted] = useState(false) 
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null;
  }
  
  return (
    <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between'>
      <nav className='flex justify-between items-center w-full py-4'>
        <Logo />
        <ul className='sm:flex hidden justify-center items-center md:gap-x-10 sm:gap-x-6 text-xs'>
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <BiHomeAlt2 className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <MdWorkOutline className='w-5 h-5' />
              Work
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'><BsCreditCard2Back className='w-5 h-5' />
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              Prices
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'><BsShop className='w-5 h-5' />
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              Store
            </Link>
          </li>
          <li className='flex flex-col justify-center items-center gap-1'>
            <Link className='flex flex-col items-center gap-1 opacity-90 hover:opacity-100 transition-all' href={'/'}>
              <SlDocs className='w-5 h-5' />
              Resources
            </Link>
          </li>
        </ul>

        <div className='Customizer flex items-center  gap-x-5 px-3'>
          <div className='flex gap-x-5 items-center'>
            <div><ModeToggle /></div>
          </div>
          <div>
      <div className="hidden sm:flex">
        {!isSignedIn && <SignInButton />}
      </div>
      <div className="hidden sm:flex">
        {isSignedIn && (
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-[48px] w-[48px]",
              },
            }}
          />
        )}
      </div>
    </div>
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar