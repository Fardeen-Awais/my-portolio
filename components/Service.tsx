import React from 'react';
import { ServicesData } from '@/constant';
import Image from 'next/image';
import vercel from '../public/vercel.svg';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';

const Service = () => {
    return (
        <section className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 '>
            <div className='flex flex-col justify-center items-center max-w-xl gap-5 p-4 text-center'>
                <h2>Our Services</h2>
                <p>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                {ServicesData.map((service) => (
                    <Card key={service.id}>
                        <CardHeader>
                            <div className='flex items-center'>
                                <Image
                                    src={vercel}
                                    alt='Service item'
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           
                            <CardDescription>{service.description}</CardDescription>
                           
                                <p>{service.details}</p>
                          
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Service;
