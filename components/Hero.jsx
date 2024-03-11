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
        <section className='container py-20'>
            <div>
                <h1 className='lg:text-7xl text-black mb-10 text-5xl'>We guide, <br />
                    <div className='flex items-center gap-4 lg:gap-6'>
                        <div>
                            <h1 className='lg:text-7xl'>We</h1>
                        </div>
                        <span data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='primary flex items-center gap-2'>
                            <h1 className='lg:text-7xl'>inspire</h1>
                            <BsStars className='text-3xl lg:text-5xl primary' />
                        </span>
                    </div>
                </h1>
                <p className='mb-4 text-[1rem] text-slate-900 lg:w-[50rem]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque habitant morbi tristique senectus et netus. Praesent elementum facilisis , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
                </p>
                <button className='btn primary mb-10'><a href="#services">Our Services</a></button>
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