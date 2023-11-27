import './globals.css'

import { ThemeProvider } from '@/providers/theme-provider'
import { NextUIProviders } from '@/providers/NextUi-provider'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M.Fardeen Full Stack Developer Portfolio',
  description: 'Make your web application with us for your buisness',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextUIProviders>
                {children}
            </NextUIProviders>
          </ThemeProvider>
        </body>
      </html>
  )
}
