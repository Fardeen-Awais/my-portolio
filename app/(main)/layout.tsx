import Navbar from "@/components/Navbar"
import StarsCanvas from "@/components/StarBackground"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {/* Start Canvas */}
            <StarsCanvas/>
            <Navbar/>
                {children}
            {/* Footer */}
        </main>
    )
}

export default MainLayout