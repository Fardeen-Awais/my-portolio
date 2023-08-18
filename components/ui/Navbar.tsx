import React from 'react';
import Link from 'next/link';
import { HiLanguage } from 'react-icons/hi2';
import Image from 'next/image';
import { ModeToggle } from './Theme';
import BottomNav from './BottomNav';

import { MdHomeFilled } from 'react-icons/md';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out max-w-7xl mx-auto px-10">
      <nav className="flex justify-between items-center py-4">
        <div className="dark:hidden logo">
          <Image src="./LightLogo.svg" width={150} height={150} alt="logo" />
        </div>
        <div className="hidden dark:flex logo">
          <Image src="./DarkLogo.svg" width={150} height={150} alt="logo" />
        </div>

        <div className="Navlinks md:flex hidden ">
          <ol className="flex lg:gap-x-10 gap-x-5 text-sm text-center items-center justify-center">
            <li className="dark:text-pink-300 text-center ">
              <Link href="/">
                {/* YEH, maine icon add kya tha dekh lena agr acha lage tu */}
                {/* Icon ke sth nahi acha lg rha  */}
                {/* <MdHomeFilled className=" flex w-9 h-9 dark:text-blue-300" /> */}
                <Image
                  src="../Assets/Light/Home.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="dark:text-white text-black text-sm font-semibold">
                  Home
                </span>
              </Link>
            </li>
            <li className="dark:text-red-300 ">
              <Link href="/">
                <Image
                  src="../Assets/Light/BriefCase.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="dark:text-white text-black text-sm font-semibold">
                  Our Work
                </span>
              </Link>
            </li>
            <li className="dark:text-red-300 ">
              <Link href="/">
                <Image
                  src="../Assets/Light/Resources.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="dark:text-white text-black text-sm font-semibold">
                  Resources
                </span>
              </Link>
            </li>
            <li className="dark:text-red-300 ">
              <Link href="/">
                <Image
                  src="../Assets/Light/Prices.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="dark:text-white text-black text-sm font-semibold">
                  Prices
                </span>
              </Link>
            </li>
          </ol>
          {/* Iqra yay temporary hai : Dark mode classes working ✔  */}
        </div>

        <div className="Customizer flex items-center  gap-x-5 px-3">
          <div className="flex gap-x-5 items-center">
            <div>
              <HiLanguage className="h-5 w-5" />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
          <div className="hidden sm:flex">Login</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
