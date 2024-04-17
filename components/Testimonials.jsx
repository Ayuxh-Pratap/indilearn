"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards';

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false ,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const serviceItems = [
        {
            id: 1,
            img: "tes3.png",
            name: "Pankaj Kumar",
            post: "CS(Iot) , ABESIT",
            des: "IndiLearn's Web Development Bootcamp was nothing short of transformative for me. The hands-on projects, coupled with expert guidance, not only honed my technical skills but also instilled confidence in my abilities.",
        },
        {
            id: 2,
            img: "tes3.png",
            name: "Munmun Tripathi",
            post: "Designer , Hind Coorporate",
            des: "I can't speak highly enough of the UI/UX Workshop at IndiLearn. It was an eye-opening experience that went beyond just learning design principles. The instructors were not just educators but mentors, guiding us.",
        },
        {
            id: 3,
            img: "tes2.jpg",
            name: "Kajal Gole",
            post: "MCA , ABESIT",
            des: "Enrolling in the MERN Development Program at IndiLearn was a pivotal moment in my career journey. The program's comprehensive curriculum, challenging projects, and environment pushed me to grow",
        },
        {
            id: 4,
            img: "tes3.png",
            name: "Sammohit Sharma",
            post: "Bootcamp Traniee , IndiLearn",
            des: "What sets IndiLearn apart is their commitment to personalized learning. As someone new to coding, I was initially intimidated. However, the instructors at IndiLearn took the time to understand my pace and learning style.",
        },
        {
            id: 5,
            img: "tes1.jpg",
            name: "Ayush Bhandari",
            post: "MCA , ABESIT",
            des: "The Complete Web Development Bootcamp at IndiLearn was a turning point for me. Not only did I acquire the technical skills needed to build websites from scratch, but I also learned the importance of collaboration.",
        },
        {
            id: 6,
            img: "tes3.png",
            name: "Kishore Pandey",
            post: "CS(AI) , ABESIT",
            des: "IndiLearn's UI/UX Workshop was an invaluable experience that exceeded my expectations. The instructors, with their industry expertise, guided us through the intricacies of designing for user experiences.",
        },
    ]

    return (
        <section className='lg:container bg-dark text-left lg:rounded-[1rem]'>
            <div className=' mb-16 px-10 lg:pl-10'>
                <h2>Our Courses</h2>
                <h3 className='lg:w-[40vw] text-white mb-4'>Let our Cummunity speak and Tell you About us and our Courses</h3>
                <p className='lg:w-[30vw]'>Voices of Success: Discover What Our Students Have to Say About IndiLearn's Engineering Education</p>
            </div>
            <Slider {...settings} className='mx-10'>
                {
                    serviceItems.map((item, i) => (
                        <Cards key={i} item={item} />
                    ))
                }
            </Slider>
        </section>
    )
}

export default Testimonials