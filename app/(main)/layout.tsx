import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import { ShadowProvider } from "@/providers/ScrollShadowProvider"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar />
            <ShadowProvider>
                {children}
            <Footer />
            </ShadowProvider>
        </main>
    )
}

export default MainLayout