import React from 'react'

const Testimonials = () => {

    const serviceItems = [
        {
            id: 1,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
        {
            id: 2,
            img: "Avatar.jpg",
            name: "Ayush Pr Singh",
            post: "FullStack Developer",
            des: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
        },
    ]

    return (
        <section className='lg:container bg-dark text-left lg:rounded-[1rem]'>
            <div className=' mb-16 px-10 lg:pl-10'>
                <h2>Our Courses</h2>
                <h3 className='lg:w-[40vw] text-white mb-4'>Our Best Courses Offered and Teach By Best of The Instructors</h3>
                <p className='lg:w-[30vw]'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='flex gap-10 justify-center lg:flex-row flex-col px-10'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='lg:w-[45rem] bg-white text-black lg:p-10 p-6 rounded-xl'>
                            <div className='flex gap-4 items-center mb-6'>
                                <img className='w-[4rem]' src={item.img} alt="" />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.post}</p>
                                </div>
                            </div>
                            <p>{item.des}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials