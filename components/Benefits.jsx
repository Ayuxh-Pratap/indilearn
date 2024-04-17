"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
    useEffect(() => {
        AOS.init({})
    })

    const serviceItems = [
        {
            id: 1,
            no: "01",
            title: "Personalized Learning",
            des: "Stay ahead with up-to-date curriculum designed by industry experts, giving you the skills and knowledge demanded by the engineering field.",
        },
        {
            id: 2,
            no: "02",
            title: "Industry Relevance",
            des: "Stay ahead with up-to-date curriculum designed by industry experts, giving you the skills and knowledge demanded by the engineering field.",
        },
        {
            id: 3,
            no: "03",
            title: "Hands-On Projects",
            des: "From day one, dive into real-world projects that challenge and inspire, reinforcing your learning through practical application.",
        },
        {
            id: 4,
            no: "04",
            title: "Supportive Community",
            des: "Join a vibrant community of learners, where collaboration and knowledge sharing thrive, creating a supportive ecosystem for growth.",
        },
        {
            id: 5,
            no: "05",
            title: "Expert Guidance",
            des: "Benefit from the wisdom of experienced instructors who provide mentorship, feedback, and insights into industry best practices.",
        },
        {
            id: 6,
            no: "06",
            title: "Continuous Improvement",
            des: "We are committed to your success, constantly evolving our courses and resources to meet the changing demands of the engineering landscape.",
        },
    ]

    return (
        <section className='container text-center'>
            <div className='mb-16 lg:px-10 text-black'>
                <h2>Benefits</h2>
                <h3 className='center lg:w-[45rem] mb-4'>We Offer Best Practices and Solutions for Your Learnings</h3>
                <p className='center lg:w-[40vw]'>Unlock Your Potential: Discover the Transformative Benefits of IndiLearn's Engineering Programs</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='grid [&>*:nth-child(odd)]:bg-teal-100 lg:grid-cols-3 grid-cols-1 gap-6 mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='border group shadow-sm rounded-[0.8rem] text-black bg-white p-10 cursor-pointer hover:scale-105 duration-300 transition-all'>
                            <div className='flex items-center justify-left gap-6 mb-4'>
                                <div className='px-2 rounded-full bg-teal-200 text-teal-700'><h4>{item.no}</h4></div>
                                <h4>{item.title}</h4>
                            </div>
                            <div className='text-left'>
                                <p className='mb-4'>{item.des}</p>
                                <div className='text-left'>
                                    <a href="/" className='flex items-center gap-2 text-black'>{item.tag}<div className='group-hover:translate-x-2 duration-300 transition-all'>{item.tagicon}</div></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
                <p className='text-gray-700'>Cool , isnt it</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="/" className='text-black group-hover:text-white'><p>Get a Course!!</p></a></button>
            </div>
        </section>
    )
}

export default Benefits