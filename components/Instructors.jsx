"use client"

import React, { useEffect } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Instructors = () => {
    useEffect(() => {
        AOS.init({})
    })

    const serviceItems = [
        {
            id: 1,
            dp: "Avatar.jpg",
            name: "Ganesh Pr Singh",
            post: "FullStack - AI/ML",
            des: "Fullstack Developer crafting AI and ML solutions with precision.",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 2,
            dp: "Avatar.jpg",
            name: "Yuvraj Singh",
            post: "App Dev / Java Dev",
            des: "Backend Guru, building seamless apps with expert backend prowess",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 3,
            dp: "Avatar.jpg",
            name: "Saubhagya",
            post: "Frontend Developer",
            des: "Frontend Maestro, weaving magic into pixel-perfect user experiences",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 3,
            dp: "Avatar.jpg",
            name: "Deeptanshu Shukla",
            post: "Fullstack - AR/VR",
            des: "XR/VR Innovator, sculpting immersive worlds with tech",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
    ]

    return (
        <section id='instructors' className='container text-center'>
            <div className='text-black mb-16'>
                <h2>Our Heroes</h2>
                <h3 className='mb-4'>Meet Our Instructors</h3>
                <p className='lg:w-[40vw] center'>Unveiling Our Diverse Team of Visionaries: Inspiring Minds, Shaping Tomorrow's Tech Landscape with Expertise, Innovation, and Passion for Excellence!</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='flex justify-around lg:flex-row flex-col gap-[4rem] mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className=' bg-gray-100 p-9 rounded-lg w-[25rem]'>
                            <img className='center w-[5rem] mb-4 rounded-full' src={item.dp} alt="" />
                            <h2 className='text-xl text-black'>{item.name}</h2>
                            <p className='primary mb-4'>{item.post}</p>
                            <p className='text-slate-600 mb-4'>{item.des}</p>
                            <div className='flex gap-4 w-min center'>
                                <a href="/" className='text-2xl duration-300 transition-all hover:text-teal-400 text-slate-600'>{item.twiicon}</a>
                                <a href="/" className='text-2xl duration-300 transition-all hover:text-teal-400 text-slate-600'>{item.linicon}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
                <p className='text-gray-700'>Join as a Mentor</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="/" className='text-black group-hover:text-white'><p>Apply Here!</p></a></button>
            </div>
        </section>
    )
}

export default Instructors