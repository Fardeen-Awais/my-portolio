import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import React from 'react'
import { ProjectData } from "@/app/constant";
const Projects = () => {
    return (
        <div className='min-h-screen flex flex-col justify-start items-center max-w-7xl mx-auto gap-10 px-5 py-20'>
            {/* <Card/> */}
            {/* <div className='flex flex-col items-center justify-center gap-8'> */}
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className='font-medium text-3xl text-[#fcfdffef]'>My Recent Project</h2>
                <p className='max-w-sm md:max-w-md text-[#EFF5FFB0] text-center'>
                    Here you can see some of my projects i worked on.
                </p>
                {/* </div> */}
            </div>
            {/* Name, Domain, desc, href, imageUrl  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {ProjectData.map((project) => {
                    return (
                        <Card key={project.name} className="max-w-[400px]">
                            <CardHeader className="flex gap-3">
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src={project.img}
                                    width={40}
                                />
                                <div className="flex flex-col gap-0">
                                    <p className="text-md">{project.name}</p>
                                    <p className="text-small text-default-500">{project.domain}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody className="p-5 text-sm text-[#EFF5FFB3] line-clamp-4">
                                {project.desc}
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <div className="flex justify-between w-full px-3">
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href={project.href}
                                        className="underline opacity-80 text-sm hover:opacity-100 transition-opacity"
                                    >
                                        Visit Live Demo
                                    </Link>
                               {project.status=='completed'? (
                                   <div className="text-green-400">Completed</div>
                               ): <div>In Progress</div> }
                                </div>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects