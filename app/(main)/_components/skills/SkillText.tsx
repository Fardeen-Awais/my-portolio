"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop, slideInFromRight } from '@/hook/motion'
import { SparklesIcon } from 'lucide-react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
          <h2 className=" text-[13px] text-center text-[#fcfdffef]">
            Think better with Next js 14
          </h2>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[20px] text-[#EFF5FFB0] font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[16px] text-[#EFF5FFB0] mb-10 mt-[10px] text-center'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText