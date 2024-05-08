"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({})
})

  return (
    <section id='section' className='container flex justify-between items-center'>
        <div className='text-black lg:basis-2/4'>
            <h2>About Us</h2>
            <h3 className='mb-10'>IndiLearn is providing the best opportunities to the students around the globe.</h3>
            <p className='mb-4'>At IndiLearn, we envision a future where quality engineering education is accessible to all. Our goal is to transform traditional learning methods, inspiring innovation and creativity in every student. By bridging the gap between theory and practice, we aim to cultivate a generation of engineers ready to tackle the challenges of tomorrow.</p>
            <p className='mb-10'>Behind every successful student is a team of dedicated educators and industry professionals. At IndiLearn, our instructors bring a wealth of knowledge and experience to the table. From seasoned engineers to UX/UI designers, our diverse team is committed to nurturing talent and fostering a culture of continuous learning.</p>
            <button className='btn primary'><a href="/AboutUs">Know More</a></button>
        </div>
        <div className='lg:block basis-2/4 pl-32 hidden'>
            <img className='rounded-md' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" src="abt3-min.jpg" alt="" />
        </div>
    </section>
  )
}

export default About