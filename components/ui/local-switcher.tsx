'use client'
import React from 'react';
import { usePathname, useRouter } from 'next/navigation' // Import the useRouter hook
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel } from './dropdown-menu';
import { HiLanguage } from 'react-icons/hi2';
import { i18n } from '@/i18n-config';

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function DropdownMenuCheckboxes() {
  const router = useRouter(); // Initialize the router
  const pathname = usePathname().slice(1);
  const handleLanguageChange = (locale: string) => {
    router.push(`/${locale}`);
  };

  function getFullLanguageName(locale:string) {
    switch (locale) {
      case 'en':
        return 'English';
      case 'hi':
        return 'हिंदी';
      case 'ur':
        return 'اردو';
      case 'ch':
        return '中文';
      case 'ar':
        return 'العربية';
      default:
        return locale; // Return the locale as is if no match
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div><HiLanguage/></div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {i18n.locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            checked={pathname === locale} // Check if the current locale matches the router's locale
            onCheckedChange={() => handleLanguageChange(locale)}
          >
            <div className='flex justify-center items-center gap-3'>
              <div>{getFullLanguageName(locale)}</div>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
