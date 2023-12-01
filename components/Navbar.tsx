// 'use client'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
import { Avatar } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Social_url } from '@/app/constant';
import { ProfileImage } from '@/app/constant';
const Navbar = () => {
    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto md:px-5 h-20 flex items-center justify-between  '>
            <nav className='flex justify-between items-center w-full p-10 '>
                {/* Logo */}
                <Avatar src={ProfileImage.url} className='w-12 h-12' />
                {/* Social Icon */}
                <div className='flex gap-3'>
                    {Social_url.map((social) => (
                        <div key={social.alt} className='opacity-80 hover:opacity-100 transition-all'>
                            {/* <Link></Link> */}
                            <Image
                                className='cursor-pointer'
                                src={social.url}
                                as={NextImage}
                                width={25}
                                height={25}
                                alt={social.alt}
                                isBlurred
                            />
                        </div>
                    ))}
                </div>

            </nav>
        </header>

    )
}

export default Navbar