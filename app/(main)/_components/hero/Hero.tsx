import React from 'react'
import styles from './styles/Hero.module.css'
import NextImage from 'next/image'
import { Button, ButtonGroup, Image } from "@nextui-org/react";
const Hero = () => {
    return (
        <section className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-10 gap-10 min-h-screen w-full z-10'>
            {/* Absolute Gradient */}
            <div className='flex flex-col gap-7'>
                <h1 className={`${styles.gradient}`}>Hi I’m Fardeen</h1>
                <p className='text-[#EFF5FFB0] sm:max-w-sm md:text-lg text-base'>I’m a Full stack developer emerging with Next.js and modern Development  experience. Empowering your developers team.</p>

                <div className='flex gap-5'>
                    <Button variant='solid' color='default' className='border border-green-600' size='lg' radius='sm'>Talk Now</Button>
                    <Button variant='faded' className='border border-white bg-transparent ' size='lg' radius='sm'>About Me</Button>
                </div>
            </div>

            <div className='w-80 h-80 md:w-96 md:h-96'>
                <Image as={NextImage} src={'/assets/Icons.png'} alt='hero' width={350} height={350} quality={100}/>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Hero