import React from 'react'
import { Button } from './ui/button'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-5 sm:p-10 gap-10 min-h-screen w-full'>
      <div className='flex flex-col gap-6'>
        <div>
          <h1 className='max-w-md sm:max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-600 to-green-300 py-1'>Web Agency for Developing Buisness</h1>
          <p className='max-w-md'>Make your Buisness Web application with our best developers. Helping Buisnesses to get their website application with security.</p>
        </div>
        <div className='flex gap-x-5'>
          <Button>Get Started</Button>
          <Button variant="outline">Explore Us</Button> {/* redirect to work:: that explain how we work  */}
        </div>
      </div>
      <div><Image
        src="/hero.jpg"
        alt="Picture of the author"
        width={1000}
        height={1000}
        quality={50}
        priority
      /></div>
    </div>

  )
}

export default Hero