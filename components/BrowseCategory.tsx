import React from 'react'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ScrollArea } from './ui/scroll-area'
import { HomeIcon } from 'lucide-react'
import { BiLeftArrow } from 'react-icons/bi'
import { Button } from './ui/button'

const BrowseCategory = () => {
    return (
        <Tabs defaultValue={'account'} className='sm:flex bg-white dark:bg-gray-900 min-h-screen rounded-xl bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity border-2 border-green-500 browserborder group hidden'>
            <div className='flex flex-col border border-transparent border-r-gray-300 w-[300px]  '>
                <div className='flex flex-col max-w-lg px-8'>
                    <h2>Browse our catalog of agencies.</h2>
                    <p>Search, connect & get proposals for your business from development to marketing.</p>
                </div>
                <Separator className='my-10 mx-auto w-60' />
                <div className='flex flex-col justify-start items-start px-10'>
                    <TabsList className='flex flex-col h-40 bg-transparent gap-5'>
                        <TabsTrigger className='gap-5 py-4 opacity-90'  value="account">
                            <HomeIcon /> Get started 🎯 <BiLeftArrow />
                        </TabsTrigger>
                        <TabsTrigger className='gap-5 py-4 opacity-90' value="password">
                            <HomeIcon /> Get started 🎯 <BiLeftArrow />
                        </TabsTrigger>
                    </TabsList>
                </div>
            </div>

            <ScrollArea className='flex w-[300px] md:w-[400px] justify-center items-center p-5'> 
                {/* Part2 */}
                <TabsContent className='flex items-center justify-center' value="account">
                    <Button className='gap-5 p-6'>
                        Web Developement
                    </Button>
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </ScrollArea>

        </Tabs>
    )
}

export default BrowseCategory