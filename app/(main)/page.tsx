import React, { Suspense } from 'react';
import Hero from '@/components/Hero';
import Storyline from '@/components/Storyline';
import Service from '@/components/Service';
import HWW from '@/components/HWW';



export default async function Home() {
  return (
    <main className='bg-background text-foreground overflow-hidden'>
        <Hero />
        <Storyline />
        <Service />
        {/* <HWW/> */}
    </main>
  );
}
