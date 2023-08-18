import Image from 'next/image';
import { Button } from '@/components/ui/button';
// import { ThemeProvider } from '@/providers/theme-provider'
import { ModeToggle } from '@/components/ui/Theme';

export default function Home() {
  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Web Agency
            <span className="dark:text-violet-400"> for </span>Developing
            Buisness
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Make you buisness web software
            <br className="md:inline lg:hidden" />
            with top class developers
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#"
              className="px-7 py-3 text-lg font-semibold rounded-md bg-black text-white dark:bg-white dark:text-black"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-7 py-3 text-lg font-semibold rounded-md bg-transparent border-2 border-gradient-to-r from-[#ADC4CE] to-[#C23373]"
            >
              Explore Us
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-3 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="./Assets/HeroImage.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>

    // {/* <ModeToggle/> */}
  );
}
