import React from 'react'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

const OurGoal = () => {
    return (
        <div className='flex flex-col justify-center items-start h-screen max-w-7xl mx-auto px-5'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h2 className='font-medium text-3xl text-[#fcfdffef]'>What I believe</h2>
                    <p className='max-w-sm md:max-w-md text-[#EFF5FFB0] text-center'>
                        Principles that dictate how we think, behave, and make decisions.
                    </p>
                </div>
                <div className='max-w-screen-md'>
                    <Image as={NextImage} src={'/assets/GoalGroup.avif'} alt='hero' width={2000} height={2000} isBlurred />
                </div>
            </div>

        </div>
    )
}

export default OurGoal