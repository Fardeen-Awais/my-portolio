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
import { ServiceProps } from '@/types';

const Service: React.FC<ServiceProps> = ({ servicejson }) => {
    return (
        <section className='flex flex-col gap-8 max-w-7xl justify-center items-center min-h-screen px-5 mx-auto'>
            <div className='flex flex-col justify-center items-center max-w-xl gap-5 p-4 text-center'>
                <h2>Our Services</h2>
                <p>Brands Design provides one-stop solution and services to small and medium-sized businesses and services to turn audiences into clients.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                {servicejson.map((service) => (
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

                        </CardHeader>
                        <CardContent>
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                        <CardFooter>{service.details}</CardFooter> 
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Service;
