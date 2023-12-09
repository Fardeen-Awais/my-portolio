'use client'
import React,  { useRef } from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from 'framer-motion';


const HighlightedStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div ref={ref}>
       <p className='max-w-sm md:max-w-md text-[#EFF5FFB0] z-10'>
        <RoughNotationGroup show={isInView}>
          I have been learning web developement <span className='text-[#fcfdffef]'><RoughNotation color='yellow' type="underline" order="2"> since 2020.</RoughNotation></span> I remembered that i wish to become an Hacker. I learn python as my first language, after that i choose to became a web developer.<br /><br />

          I'm <RoughNotation color='lightgreen' type="circle" order="3"><span className='text-[#fcfdffef]'>working on the Next.js Framework</span></RoughNotation> and build some real world Project. I also <span className='text-[#fcfdffef]'> collaborate with @iqrarafiq</span> on some of my open source projects that lead me to have an experience of working with team.<br/><br />

          I'm <RoughNotation type="highlight" color="#ffff" order="1"><span className='text-[#000000ef]'>open for new opportunities</span></RoughNotation> and curious to collaborate with new teams. I will provide my best in terms of performance, accessibility and features with the power of Next.js. <br /> <br /> Better graphics design with the power of Figma and animation with Rive can help me to<span className='text-[#fcfdffef]'> build something special. </span>
          
          I like to make web apps that communicate with the user.<span className='text-[#fcfdffef]'><RoughNotation color='red' type="box" order="4"> Quality is better than Quantity</RoughNotation> is my motto </span>that i can lead in your team.</RoughNotationGroup>
        </p>
    </div>
  )
}

export default HighlightedStory