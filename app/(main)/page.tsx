import React, { Suspense } from 'react';
import Hero from './_components/hero/Hero';
import Image from 'next/image';
import { gridImage } from '../constant';
import StarsCanvas from '@/components/StarBackground';
import Skills from './_components/skills/Skills';


export default async function Home() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20">
        {/* <StarsCanvas /> */}
        <Image src={gridImage.url} alt='hero' width={1000} height={1000} className='w-full h-full absolute overflow-hidden z-0' />
        <Hero />

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
        
        <Skills />
      {/* <Encryption /> */}
      {/* <Projects /> */}
      </div>
    </main>
  );
}
