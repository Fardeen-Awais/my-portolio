import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='sticky bg-white top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out animate-header-slide-down-fade'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-10 py-4'>

          <div className='logo'>logo</div>

          <div className='Navlinks sm:flex hidden'>
            <ol className='flex gap-x-8 pl-20'>
                <li>home</li>
                <li>Services</li>
                <li>Work</li>
                <li>Prices</li>
                <li>Resources</li>
            </ol>
          </div>

          <div className='Customizer flex gap-8'>
            <div className='flex gap-4'>
                <div>Icon</div>
                <div>Icon</div>
            </div>
            <div>Login Avatar</div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar