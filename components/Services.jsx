import React from 'react'
import { IoDesktopOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Services = () => {

    const serviceItems = [
        {
            id: 1,
            title: "Web / App Dev",
            des: "Lessons on design that cover the most recent developments.",
            Icon: <IoDesktopOutline />,
            tagicon: <MdKeyboardDoubleArrowRight />,
            tag: "Learn More"
        },
        {
            id: 2,
            title: "Data Structures",
            des: "Classes in development that cover the most recent advancements in web.",
            Icon: <IoDesktopOutline />,
            tagicon: <MdKeyboardDoubleArrowRight />,
            tag: "Learn More"
        },
        {
            id: 3,
            title: "UI / UX Design",
            des: "Classes in development that cover the most recent advancements in web.",
            Icon: <IoDesktopOutline />,
            tagicon: <MdKeyboardDoubleArrowRight />,
            tag: "Learn More",
        },
    ]
    return (
        <section className='container py-10'>
            <div className='text-center mb-10'>
                <h2>Our Services</h2>
                <h3 className='lg:w-[60rem] center'>We Put You In TOP 1% With Our Industry Rated Curriculum
                    In Several Fields
                </h3>
            </div>
            <div className='flex justify-between gap-6 lg:flex-row flex-col'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='border group shadow-lg rounded-[0.8rem] text-black bg-white p-11 lg:w-[25rem] cursor-pointer hover:bg-teal-400 hover:text-white hover:-translate-y-4 duration-300 transition-all'>
                            <div className='flex items-center justify-left gap-6 mb-4'>
                                <div className=' text-[1.2rem] bg-primary p-3 rounded-md primary'>{item.Icon}</div>
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
        </section>
    )
}

export default Services