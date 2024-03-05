import React from 'react'
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";


const Courses = () => {

    const serviceItems = [
        {
            id: 1,
            img: "course_img.svg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy:"Register Now"
        },
        {
            id: 2,
            img: "course_img.svg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy:"Register Now"
        },
        {
            id: 3,
            img: "course_img.svg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy:"Register Now"
        },
    ]

    return (
        <section id='courses' className='lg:container bg-dark text-center lg:rounded-[1rem]'>
            <div className='mb-16 px-10'>
                <h2>Our Courses</h2>
                <h3 className='text-white center lg:w-[35rem] mb-4'>Our Best Courses Offered and Teach By Best Instructors</h3>
                <p className='center lg:w-[30vw]'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='flex justify-center mb-16 px-10 lg:flex-row gap-10 flex-col'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='lg:w-[20rem] bg-white p-3 text-black rounded-xl text-start'>
                            <img src={item.img} className='mb-6' alt="" />
                            <div className='flex justify-between mb-4 items-center'>
                                <h4>{item.name}</h4>
                                <button className='btn sm'><small className='primary'>{item.level}</small></button>
                            </div>
                            <p className='mb-4'>{item.des}</p>
                            <h3 className='mb-3'>{item.price}</h3>
                            <div className='flex justify-between'>
                                <button className='btn'><a href="/courseDetail" className='text-[0.8rem]'>{item.tag}</a></button>
                                <button className='btn'><a href="/" className='text-[0.8rem]'>{item.buy}</a></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
            <button className='group btn round white'><a href="/courses" className='text-white group-hover:text-black'><p>Explore All</p></a></button>
            </div>
        </section>
    )
}

export default Courses