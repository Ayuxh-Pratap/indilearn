import AllCourses from "@/components/AllCourses"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <main className="bg-white">
        <Navbar />
        <AllCourses />
        <Footer />
    </main>
  )
}

export default page