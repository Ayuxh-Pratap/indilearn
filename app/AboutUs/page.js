import About from "@/components/About"
import About2 from "@/components/About2"
import About3 from "@/components/About3"
import BannerAbt from "@/components/BannerAbt"
import Benefits from "@/components/Benefits"
import FaqAbt from "@/components/FaqAbt"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <main className="bg-white">
        <Navbar />
        <About3 />
        <About2 />
        <Benefits />
        <BannerAbt />
        <FaqAbt />
        <Footer />
    </main>
  )
}

export default page
