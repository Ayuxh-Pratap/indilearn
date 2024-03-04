import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <main className='bg-white'>
        <Navbar />
        <ContactForm />
        <Footer />
    </main>
  )
}

export default page