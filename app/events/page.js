import EventGrid from "@/components/EventGrid"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <main className="bg-white">
        <Navbar />
        <EventGrid />
        <Footer />
    </main>
  )
}

export default page