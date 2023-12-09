import FooterInfo from '@/components/FooterInfo'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-between items-center h-screen max-w-7xl mx-auto gap-20 p-10 '>
            <div className='w-96 h-96 lg:h-[800px] lg:w-[800px] xl:w-[900px] xl:h-[900px] 2xl:w-[1200px] 2xl:h-[1200px]'>
                <Image as={NextImage} src={'/assets/location.png'} alt='location' width={2000} height={2000} isBlurred />
            </div>
            <FooterInfo/>
        </div>
    )
}

export default Footer