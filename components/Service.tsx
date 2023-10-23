import React from 'react';
// import { ServicesData } from '@/constant';
import Image from 'next/image';
import vercel from '../public/vercel.svg';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card';
import BrowseCategory from './BrowseCategory';

const Service = () => {
    return (
        <section className='flex flex-col gap-5 w-full justify-start items-center min-h-screen mx-auto '>
            <div className='flex flex-col justify-center items-center max-w-xl text-center'>
                <h2>Our Services</h2>
                <p>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
            </div>
            <div className='flex m-10'>

                <BrowseCategory/>
            </div>
        </section>
    );
}

export default Service;
