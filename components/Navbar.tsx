// 'use client'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
import { Avatar } from "@nextui-org/react";

import { ProfileImage } from '@/app/constant';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between  '>
            <nav className='flex justify-between items-center w-full p-10 '>
                {/* Logo */}
                <Avatar src={ProfileImage.url} className='w-12 h-12' />
                {/* Social Icon */}
                <div className='flex gap-3'>
                    <Navlink />
                </div>
            </nav>
        </header>

    )
}

export default Navbar