"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About2 = () => {
    useEffect(() => {
        AOS.init({})
    })
    return (
        <section className='container py-0 flex justify-between items-center'>
            <div className='lg:block basis-2/4 pr-32 hidden'>
                <img className='rounded-md' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" src="abt4.jpg" alt="" />
            </div>
            <div className='text-black lg:basis-2/4'>
                <h2>About Us</h2>
                <h3 className='mb-10'>Our Commitment to Excellence: Empowering Tomorrow's Engineers Today</h3>
                <p className='mb-4'>At IndiLearn, we are more than just an educational platform—we are architects of inspiration, dedicated to shaping the future of engineering education. Our mission is to empower young minds with the knowledge, skills, and passion needed to innovate and excel in the dynamic world of engineering.</p>
                <p className='mb-10'>With a focus on experiential learning, industry relevance, and personalized attention, we are committed to nurturing the next generation of engineering leaders. Join us on this transformative journey, where curiosity knows no bounds and possibilities are limitless. IndiLearn - Igniting Minds, Engineering Futures.</p>
                <button className='btn primary'><a href="/contact">Lets Talk</a></button>
            </div>
        </section>
    )
}

export default About2