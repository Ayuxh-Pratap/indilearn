import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const Instructors = () => {

    const serviceItems = [
        {
            id: 1,
            dp: "Avatar.svg",
            name: "Ganesh Pr Singh",
            post: "Application Support Analyst Lead",
            des: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 2,
            dp: "Avatar.svg",
            name: "Ganesh Pr Singh",
            post: "Application Support Analyst Lead",
            des: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 3,
            dp: "Avatar.svg",
            name: "Ganesh Pr Singh",
            post: "Application Support Analyst Lead",
            des: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            twiicon: <FaLinkedin />,
            linicon: <FaTwitter />,
            tag: "Learn More"
        },
        {
            id: 3,
            dp: "Avatar.svg",
            name: "Ganesh Pr Singh",
            post: "Application Support Analyst Lead",
            des: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
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
                <p className='lg:w-[40vw] center'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='flex justify-around lg:flex-row flex-col gap-[4rem] mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className=' bg-gray-100 p-9 rounded-lg'>
                            <img className='center w-[5rem] mb-4' src={item.dp} alt="" />
                            <h2 className='text-xl text-black'>{item.name}</h2>
                            <p className='primary mb-4'>{item.post}</p>
                            <p className='text-slate-600 mb-4'>{item.des}</p>
                            <div className='flex gap-4 w-min center'>
                                <a href="/" className='text-2xl duration-300 transition-all hover:text-teal-400 text-slate-600'>{item.twiicon}</a>
                                <a href="/" className=' text-2xl duration-300 transition-all hover:text-teal-400 text-slate-600'>{item.linicon}</a>
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