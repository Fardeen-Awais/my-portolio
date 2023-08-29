import Image from 'next/image'
import React from 'react'
import hww from '../public/hww.svg'
const HWW = () => {
  return (
    <section className='flex flex-col justify-center items-center max-w-7xl mx-auto gap-y-10 px-5'>
      <div className='flex flex-col gap-x-40 max-w-xl text-center'>
        <h2>Our Process</h2>
        <p>We will ask quiz throughout get started process. Hense it saves a lot time of asking some common details.</p>
      </div>
      <div>
        <Image
          src={hww}
          width={320}
          height={250}
          alt="Picture of the author"
        />
      </div>
    </section>
  )
}

export default HWW