import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-5 sm:p-10 gap-10 min-h-screen w-full'>
      <div className='flex flex-col gap-6'>
        <div>
          <h1 className='max-w-md sm:max-w-3xl'>Web Agency for Developing Buisness</h1>
          <p className='max-w-md'>Make your Buisness Web application with our best developers. Helping Buisnesses to get their website application with security.</p>
        </div>
        <div className='flex gap-x-5'>
          <Button>Get Started</Button>
          <Button variant="outline">Explore Us</Button> {/* redirect to work:: that explain how we work  */}
        </div>
      </div>
      <div><Image
        src="/hero.png"
        alt="Hero Image"
        width={1000}
        height={1000}
        quality={100}
        priority
      /></div>
    </div>

  )
}

export default Hero