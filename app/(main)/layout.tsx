import Navbar from "@/components/Navbar"
import Footer from "./_components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <TooltipProvider>
                <Navbar />
                {children}
                <Footer />
            </TooltipProvider>
        </main>
    )
}
