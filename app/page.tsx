import Image from 'next/image'
import { Button } from "@/components/ui/button"
// import { ThemeProvider } from '@/providers/theme-provider'
import { ModeToggle } from '@/components/Theme'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center bg-background text-foreground min-h-screen max-w-7xl mx-auto'>
      <div className='flex flex-col p-10'>
        <h1 className='text-2xl font-bold text-gray-400'>Hi Alfarnex</h1>
        <p className='max-w-7xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore corporis, magni, ipsum optio dolorem voluptate odio minima vero repellat ratione, aliquid porro magnam vel eligendi. Sequi doloremque a magni officia eveniet sint pariatur!</p>
      </div>
      <Button>Button</Button>
      {/* <ModeToggle/> */}
    </div>
  )
}
