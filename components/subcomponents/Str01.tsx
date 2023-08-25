import React from 'react'
import WebVitals from '../ui/webvitals'

const Storyline01 = () => {
  return (
    <div className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
      <div className='flex flex-col justify-center items-center max-w-xl gap-5 p-4'>
        <h2>Welcome to Alfarnex</h2>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores odit voluptatem expedita laboriosam vel obcaecati quos similique facilis, qui corporis blanditiis officia repudiandae aut architecto. Qui doloremque in minima!</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
        <WebVitals value={90} duration={2500}/>
        <p className='max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum esse quis sapiente quidem error. Commodi dolorum doloremque quo esse soluta est? Blanditiis debitis quo nobis qui quibusdam ad eius cupiditate, quae earum error. Sit blanditiis modi illum doloribus laborum repudiandae non voluptate ipsam labore vel! Dignissimos earum omnis maiores expedita blanditiis! Consequuntur, qui magnam?</p>
      </div>
    </div>
  )
}

export default Storyline01