import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Hero = () => {
    return (
        <section className='container py-20'>
            <div className='relative'>
                <h1 className='lg:text-7xl text-black mb-10 text-5xl'>We guide, <br />
                    We <span className='primary'>inspire</span>.</h1>
                <p className='mb-4 text-[1rem] text-slate-900 lg:w-[50rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque habitant morbi tristique senectus et netus. Praesent elementum facilisis , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
                </p>
                <button className='btn primary mb-10'><a href="#services">Our Services</a></button>
                <a href="/" className='lg:flex gap-2 items-center bottom-40 right-0 m-0 p-0 rotate-90 absolute text-black hidden'>Scroll Dowm <MdKeyboardDoubleArrowRight /></a>
            </div>
            <img src="hero_img.svg" alt="" />
        </section>
    )
}

export default Hero