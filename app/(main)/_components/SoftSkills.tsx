import Image from 'next/image'
import React from 'react'

const SoftSkills = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto max-w-7xl gap-10 py-28 px-5 '>
      <div className='flex flex-col sm:flex-row justify-center items-center lg:ml-60'>
        <div className='h-48 w-48'>
          <Image src={'/assets/cloud.png'} alt='hero' width={800} height={800} />
        </div>
        <p className='max-w-sm md:max-w-md text-base text-[#EFF5FFB0]'><span className='text-[#fcfdffef]'>I believe in better Performance</span>, SEO and Accessibility in modern Application. Fast User experience and modern web techniques <span className='text-[#fcfdffef]'>i always explore to achieve that.</span></p>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center lg:mr-60'>
        <div className='h-48 w-48'>
          <Image src={'/assets/message.png'} alt='hero' width={800} height={800} />
        </div>
        <p className='max-w-sm md:max-w-md text-base text-[#EFF5FFB0]'>My Aim is to make application that <span className='text-[#fcfdffef]'>communicate the with user.</span> I always willing to persue my best in my Team and I always try my best to <span className='text-[#fcfdffef]'>make myself better than yesterday.</span></p>
      </div>
    </div>
  )
}

export default SoftSkills