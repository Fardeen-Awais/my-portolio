import React from 'react'

const Story = () => {
  return (
    <div className='flex justify-center items-start h-screen max-w-7xl mx-auto px-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h2 className='font-medium text-3xl text-[#fcfdffef]'>Our Story</h2>
        <p className='max-w-sm md:max-w-md text-[#EFF5FFB0]'>
          Resend started with an open source project in 2022. We were frustrated by how difficult it was to build modern email templates that worked well across all email clients. <br /> <br />

          As we started to dig deeper, it became clear that this was just the tip of the iceberg. We realized that sending emails that reach the inbox (not the spam folder) was the biggest pain point, so we started to explore something new.<br /> <br />

          In 2023, we launched an entire email sending platform and joined Y Combinator's winter batch. We're creating something special here, and we're excited to build it with you.
        </p>
      </div>
    </div>
  )
}

export default Story