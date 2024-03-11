"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({})
})

  return (
    <section className='container flex justify-between items-center'>
        <div className='text-black lg:basis-2/4'>
            <h2>About Us</h2>
            <h3 className='mb-10'>eLearning providing the best opportunities to the students around the glob.</h3>
            <p className='mb-4'>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.</p>
            <p className='mb-10'>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.</p>
            <button className='btn primary'><a href="/AboutUs">Know More</a></button>
        </div>
        <div className='lg:block basis-2/4 pl-32 hidden'>
            <img data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" src="about_img.jpg" alt="" />
        </div>
    </section>
  )
}

export default About