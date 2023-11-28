import React from 'react'

const Seperator = () => {
  return (
    <div className='flex justify-center items-center'>
        <svg className='w-96 h-5' viewBox="0 0 654 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L654.005 1" stroke="url(#paint0_radial_15_361)" style={{ mixBlendMode: 'plus-lighter' }} />
            <defs>
              <radialGradient id="paint0_radial_15_361" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.002 1.5) rotate(90) scale(0.5 327.002)">
                <stop />
                <stop offset="0.141754" stopColor="white" />
                <stop offset="0.907378" stopColor="white" />
                <stop offset="1" stopColor="#1E1C1C" />
              </radialGradient>
            </defs>
          </svg>
    </div>
  )
}

export default Seperator