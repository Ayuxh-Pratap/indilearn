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
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
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
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 2,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 3,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 4,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 5,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 6,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
    ]

    return (
        <section className='lg:container bg-dark text-left lg:rounded-[1rem]'>
            <div className=' mb-16 px-10 lg:pl-10'>
                <h2>Our Courses</h2>
                <h3 className='lg:w-[40vw] text-white mb-4'>Our Best Courses Offered and Teach By Best of The Instructors</h3>
                <p className='lg:w-[30vw]'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
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