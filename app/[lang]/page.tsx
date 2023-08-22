import React from 'react';
import Hero from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface HomeProps {
  params: { lang: Locale };
}

export default async function Home({
  params: { lang },
}: HomeProps) {
  const dictionary = await getDictionary(lang);
  const Herodata = dictionary.Hero
  // console.log(Herodata)
  return (
    <main className='bg-background text-foreground overflow-hidden'>
      <Hero Herodata={Herodata}/>
    </main>
  );
}
