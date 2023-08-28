'use client'
import React from 'react'
import WebVitals from '../ui/webvitals'
import { motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion'

const Storyline02 = () => {
  return (
    <motion.section variants={slideAnimation("up")} initial="initial" exit="exit" whileInView="animate" className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
      <div className='flex flex-col justify-center items-center max-w-xl  p-4 text-center'>
        <h2>Performance</h2>
        <p>{`Our target 🎯 is to maintain your Application Performance 🔥 to make sure the Better User Experience 💘`}</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center justify-items-center p-5 gap-10 font-semibold bg-opacity-50 shadow-sm backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out'>

        <div className='flex flex-col justify-center items-center'><WebVitals value={100} duration={2500} /><p >SEO</p></div>
        <div className='flex flex-col justify-center items-center'><WebVitals value={90} duration={2500} /><p >Performance</p></div>
        <div className='flex flex-col justify-center items-center'><WebVitals value={100} duration={2500} /><p >Accessibility</p></div>
      </div>
    </motion.section>
  )
}

export default Storyline02