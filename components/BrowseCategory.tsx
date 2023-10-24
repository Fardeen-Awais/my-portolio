import React from 'react'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ScrollArea } from './ui/scroll-area'
import { HomeIcon } from 'lucide-react'
import { BiLeftArrow } from 'react-icons/bi'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const BrowseCategory = () => {
    return (
        <Tabs defaultValue={'account'} className='sm:flex hidden bg-white dark:bg-gray-900 min-h-screen rounded-xl bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity border-2 border-green-500 dark:border-green-300  browserborder shadow-lg'>
            <div className='flex flex-col border border-transparent border-r-gray-300 w-[300px]  '>
                <div className='flex flex-col max-w-lg px-8'>
                    <h2>Browse our catalog of agencies.</h2>
                    <p>Search, connect & get proposals for your business from development to marketing.</p>
                </div>
                <Separator className='my-10 mx-auto w-60' />
                <div className='flex flex-col justify-start items-start mx-5'>
                    <TabsList className='flex flex-col bg-transparent h-40 '>
                        <ScrollArea className='h-full w-64 px-5 gap-5'>
                            <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="account">
                                <HomeIcon /> Zabardast 🎯 <BiLeftArrow />
                            </TabsTrigger>
                            <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="password">
                                <HomeIcon /> Get started 🎯 <BiLeftArrow />
                            </TabsTrigger>
                            <TabsTrigger className='gap-5 py-4 opacity-90 w-52' value="power">
                                <HomeIcon /> Get started 🎯 <BiLeftArrow />
                            </TabsTrigger>
                        </ScrollArea>
                    </TabsList>
                </div>
            </div>

            <ScrollArea className='flex h-[500px] md:h-[500px] w-[220px] md:w-[300px] justify-center items-center m-10 p-5'>
                {/* Part2 */}
                <TabsContent className='flex flex-col gap-10 items-center justify-center' value="account">
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                    <Button className='p-6'>
                        Web Developement
                    </Button>
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </ScrollArea>

            {/* For Mobile */}
        </Tabs>
    )
}

export default BrowseCategory