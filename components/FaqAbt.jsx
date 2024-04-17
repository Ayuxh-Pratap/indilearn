"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FaqAbt = () => {
    useEffect(() => {
        AOS.init({})
    })

    const serviceItems = [
        {
            id: 1,
            title: "What is IndiLearn",
            des: "IndiLearn stands out by offering a hands-on learning experience that blends theory with practical application. Our courses are designed to ignite curiosity and creativity, ensuring students grasp engineering concepts.",
        },
        {
            id: 2,
            title: "What make IndiLearn unique",
            des: "We maintain small class sizes to ensure personalized attention for every student. This allows instructors to provide individualized feedback, address questions, and tailor learning experiences to meet learner.",
        },
        {
            id: 3,
            title: "Who is our Instructor",
            des: "At IndiLearn, instructors are chosen for their expertise, passion for teaching, and industry experience. We believe in a mentorship approach, where instructors guide students not just academically, but also inspire them to excel.",
        },
        {
            id: 4,
            title: "but , Im new to Coding",
            des: "Absolutely! IndiLearn welcomes beginners with open arms. Our courses are structured to cater to all skill levels, whether you're taking your first steps into coding or looking to expand your knowledge.",
        },
        {

            title: "What projects can I expect",
            des: "IndiLearn offers a diverse range of projects, from building responsive websites to developing innovative apps. These projects not only reinforce learning but also give students a chance to showcase their skills in a practical setting.",
        },
        {
            id: 6,
            title: "opportunities for collaboration",
            des: "Absolutely! IndiLearn fosters a collaborative environment where students can connect with peers, share ideas, and work together on group projects. Additionally, we organize networking events, workshops, and guest lectures.",
        },
    ]

    return (
        <section className='container text-center'>
            <div className='mb-16 text-black'>
                <h2>FAQs</h2>
                <h3 className='center lg:w-[45rem] mb-4'>Your Frequently Asked Questions</h3>
                <p className='center lg:w-[40vw]'>Frequently Asked Questions: Discover More About IndiLearn's and its Innovative Approach to Engineering Education and Technology</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='grid lg:grid-cols-3 grid-cols-1 gap-6 mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='border hover:border-black text-left shadow-sm rounded-[0.8rem] text-black bg-white p-5 cursor-pointer duration-300 transition-all'>
                            <h4 className='mb-4'>{item.title}</h4>
                            <p className='mb-4'>{item.des}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
                <p className='text-gray-700'>Got a Question</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="/contact" className='text-black group-hover:text-white'><p>Ask Here!</p></a></button>
            </div>
        </section>
    )
}

export default FaqAbt