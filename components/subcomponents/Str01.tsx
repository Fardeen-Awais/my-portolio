'use client'
import React, { useRef } from 'react'
import WebVitals from '../ui/webvitals'
import { motion} from 'framer-motion'
import { slideAnimation } from '@/lib/motion'

const Storyline01 = () => {
  const ref = useRef(null)
  return (
    <motion.div ref={ref} variants={slideAnimation("up")} initial="initial" exit="exit" whileInView="animate" className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
      <div className='flex flex-col justify-center items-center max-w-xl p-4'>
        <h2>Welcome to Alfarnex</h2>
        <p className='text-center'>{`Hi There 👋 We are helping business to without top class developers and Designers. We can relief a lot of your Business Stress 😩`}</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-8 bg-opacity-50 shadow-lg backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out rounded-2xl'>
        <div>
        <WebVitals value={90} duration={2500}/>
        </div>
        <p className='max-w-md'>{`We make interactive web applications that result to increase of more than 80% of Success 🎉`}</p>
      </div>
    </motion.div>
  )
}

export default Storyline01