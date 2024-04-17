"use client"

import React, { useEffect } from 'react'
import Scrolldown from './Scrolldown';
import { BsStars } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    useEffect(() => {
        AOS.init({})
    })

    return (
        <section className='container pt-40 py-20'>
            <div>
                <h1 className='lg:text-6xl text-black mb-10 text-4xl'>Growing Skills <br />
                    <div className='flex items-center gap-4 lg:gap-6'>
                        <div>
                            <h1 className='lg:text-6xl text-4xl mt-2'>Defining</h1>
                        </div>
                        <span data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='primary flex items-center gap-1'>
                            <h1 className='lg:text-6xl text-4xl mt-2'>Future</h1>
                            <BsStars className='text-3xl lg:text-5xl primary mt-2' />
                        </span>
                    </div>
                </h1>
                <p className='mb-4 text-[1.1rem] text-gray-900 lg:w-[50rem]'>
                At Indilearn, we are not just an educational platform. we are architects of inspiration, fostering a passion for engineering among thousands of technocrats.
                </p>
                <button className='btn primary mb-12'><a href="#services">Our Services</a></button>
                {/* <a href="/" className='lg:flex gap-2 items-center bottom-40 right-0 m-0 p-0 rotate-90 absolute text-black hidden'>Scroll Dowm <MdKeyboardDoubleArrowRight /></a> */}
                <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" className='hidden lg:block absolute right-[10rem] top-[20rem]'>
                    <Scrolldown />
                </div>
            </div>
            <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" loading='lazy' src="hero_img.jpg" alt="" />
        </section>
    )
}

export default Hero