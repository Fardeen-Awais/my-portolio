import HighlightedStory from '@/components/HighlightedStory';
import React from 'react'

const Story = () => {
  return (
    <div id='about' className='flex justify-center items-start h-screen max-w-7xl mx-auto px-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h2 className='font-medium text-3xl text-[#fcfdffef]'>My Story</h2>
        <HighlightedStory />
      </div>
    </div>
  )
}
export default Story