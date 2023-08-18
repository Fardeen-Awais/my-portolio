import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Define the RootLayoutProps type
type RootLayoutProps = {
  children: React.ReactNode;
};

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alfarnex Startup',
  description: 'Make your application for your Buisness with alfarnex agency',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
