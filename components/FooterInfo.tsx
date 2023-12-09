'use client'
import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Check, Copy } from 'lucide-react'
import { Social_url } from '@/app/constant'
import Link from 'next/link'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

const FooterInfo = () => {
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText('fardeenjutt99@gmail.com'); // This copies the invite url from above variable
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
  return (
    <div className='flex flex-col justify-center items-center gap-3 my-5 py-5 z-[1]'>
                <div className='flex items-center justify-center gap-x-1'><span className='text-[#fcfdffef]'>Gmail:</span><p className='text-[#EFF5FFB0]'>fardeenjutt99@gmail.com</p>
                    <div>
                        {!copied ?
                            <Tooltip><TooltipTrigger><Copy onClick={onCopy} className='w-4 h-4 cursor-pointer' /><TooltipContent>Copy my Personal Gmail</TooltipContent></TooltipTrigger></Tooltip>
                            : <Check className='cursor-pointer text-green-500' />}

                    </div>
                </div>

                <div className='flex gap-3'>
                    {Social_url.map((social) => (
                        <div key={social.alt} className='opacity-80 hover:opacity-100 transition-all'>
                            <Link href={social.href} target="_blank">
                                <Image
                                    className='cursor-pointer'
                                    src={social.url}
                                    as={NextImage}
                                    width={25}
                                    height={25}
                                    alt={social.alt}
                                    isBlurred
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default FooterInfo