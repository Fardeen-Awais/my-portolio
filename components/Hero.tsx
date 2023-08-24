'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import HeroImage from "public/hero.png"
import { motion } from 'framer-motion'
import { headContainerAnimation, headTextAnimation,headContentAnimation } from '@/lib/motion'
interface HeroProps {
  Herodata: {
    title: string;
    description: string;
    getStartedButton: string;
    exploreButton: string;
  };
}


const Hero : React.FC<HeroProps> = ({ Herodata }) =>  {

  return (
    <div className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-5 sm:p-10 gap-10 min-h-screen w-full'>
      <div className='flex flex-col gap-6'>
        <div>
          <h1 className='max-w-md sm:max-w-3xl'>{Herodata.title}</h1>
          <p className='max-w-md'>Make your Buisness Web application with our best developers. Helping Buisnesses to get their website application with security.</p>
        </div>
        <div className='flex gap-x-5'>
          <Button>Get Started</Button>
          <Button variant="outline">Explore Us</Button> {/* redirect to work:: that explain how we work  */}
        </div>
      </div>

      <div className='w-96 h-96 sm:w-full sm:h-full'>
        <Image
        src={HeroImage}
        alt="Hero Image"
        width={1000}
        height={1000}
        loading="eager"
        className="relative inset-0"
        priority={true}
        draggable="false"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      </div>
    </div>

  )
}

export default Hero