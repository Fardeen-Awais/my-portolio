import { Social_url } from '@/app/constant'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-between items-center h-screen max-w-7xl mx-auto gap-20 p-10'>
            <div className='w-96 h-96 lg:h-[800px] lg:w-[800px] xl:w-[900px] xl:h-[900px] 2xl:w-[1200px] 2xl:h-[1200px]'>
                <Image as={NextImage} src={'/assets/location.png'} alt='location' width={2000} height={2000} isBlurred />
            </div>
            <div className='flex flex-col justify-center items-center gap-3 my-5 py-5'>
                <div><span className='text-[#fcfdffef]'>Gmail:</span><span className='text-[#EFF5FFB0]'> fardeenjutt99@gmail.com</span></div>
                <div className='flex gap-3'>
                    {Social_url.map((social) => (
                        <div key={social.alt} className='opacity-80 hover:opacity-100 transition-all'>
                            <Link href={social.href} target="_blank">
                                <Image
                                    className='cursor-pointer'
                                    src={social.url}
                                    as={NextImage}
                                    width={25}
                                    height={25}
                                    alt={social.alt}
                                    isBlurred
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer