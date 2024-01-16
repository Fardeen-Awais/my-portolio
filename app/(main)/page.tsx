import React from 'react';
import Hero from './_components/hero/Hero';
import Image from 'next/image';
import { gridImage } from '../constant';
import Story from './_components/Story';
import OurGoal from './_components/OurGoal';
import Seperator from './_components/Seperator';
import Skills from './_components/Skill/Skills';
import SoftSkills from './_components/SoftSkills';
import Projects from './_components/Project';
import StarsCanvas from '@/components/StarBackground';


export default async function Home() {
  return (
    <main className="h-full w-full bg-background text-foreground">
      <StarsCanvas />
      <div className="flex flex-col gap-20 -z-30">
        <Image src={gridImage.url} alt='hero' width={1000} height={1000} className='w-full h-full absolute overflow-hidden z-0' />
        <Hero />
        <Seperator/>  
        <Story />
        <OurGoal/>
        <Seperator/>
        <Skills/>
        <SoftSkills/>
        <Seperator/>
        <Projects />
      </div>
    </main>
  );
}
