import CourseDetail from "@/components/CourseDetail"
import Courses from "@/components/Courses"
import FaqAbt from "@/components/FaqAbt"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <main className="bg-white">
        <Navbar />
        <CourseDetail />
        <Courses/>
        <FaqAbt />
        <Footer />
    </main>
  )
}

export default page