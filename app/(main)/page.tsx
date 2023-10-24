import React, { Suspense } from 'react';
import Hero from '@/components/Hero';
import Storyline from '@/components/Storyline';
import Service from '@/components/Service';
import Process from '@/components/Process';
import { ShadowProvider } from '@/providers/ScrollShadowProvider';



export default async function Home() {
  return (
    <main className='bg-background text-foreground overflow-hidden min-h-screen'>
        <Hero />
        <Storyline />
        <Service />
        <Process/>
    </main>
  );
}
