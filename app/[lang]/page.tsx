import React, { Suspense } from 'react';
import Hero from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import Loading from './loading';
import Storyline from '@/components/Storyline';
import Service from '@/components/Service';
import HWW from '@/components/HWW';

interface HomeProps {
  params: { lang: Locale };
}

export default async function Home({
  params: { lang },
}: HomeProps) {
  const dictionary = await getDictionary(lang);
  const Herodata = dictionary.Hero;
  const servicejson= dictionary.Services
  return (
    <main className='bg-background text-foreground overflow-hidden'>
        <Hero Herodata={Herodata}/>
        <Storyline />
        <Service servicejson={servicejson}/>
        <HWW/>
    </main>
  );
}
