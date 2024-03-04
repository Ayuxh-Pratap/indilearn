import About from "@/components/About";
import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Banner />
      <Instructors />
      <Courses />
      <Events />
      <Testimonials />
      <Footer />
    </main>
  );
}
