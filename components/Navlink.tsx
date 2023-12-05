'use client'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Social_url } from '@/app/constant';
import Link from 'next/link';

const Navlink = () => {
  return (
    <>
         {Social_url.map((social) => (
                        <TooltipProvider>
                            <div key={social.alt} className='opacity-80 hover:opacity-100 transition-all'>
                                <Tooltip>
                                    <Link href={social.href} target="_blank">
                                        <TooltipTrigger>
                                            <Image
                                                className='cursor-pointer'
                                                src={social.url}
                                                as={NextImage}
                                                width={25}
                                                height={25}
                                                alt={social.alt}
                                                isBlurred
                                            />
                                        </TooltipTrigger>
                                    </Link>
                                    <TooltipContent>
                                        <p>{social.alt}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    ))}
    </>
  )
}

export default Navlink