import React from 'react'

const EventGrid = () => {

    const serviceItems = [
        {
            id: 1,
            img: "grid-1.jpg",
        },
        {
            id: 2,
            img: "grid-2.jpg",
        },
        {
            id: 3,
            img: "grid-3.jpg",
        },
        {
            id: 4,
            img: "grid-4.jpg",
        },
        {
            id: 5,
            img: "grid-5.jpg",
        },
        {
            id: 6,
            img: "grid-6.jpg",
        },
        {
            id: 7,
            img: "grid-7.jpg",
        },
        {
            id: 8,
            img: "grid-8.jpg",
        },
        {
            id: 9,
            img: "grid-9.jpg",
        },
        {
            id: 10,
            img: "grid-10.jpg",
        },
        {
            id: 11,
            img: "grid-11.jpg",
        },
        {
            id: 12,
            img: "grid-12.jpg",
        },
        {
            id: 13,
            img: "grid-13.jpg",
        },
        {
            id: 14,
            img: "grid-14.jpg",
        },
    ]


    return (
        <section id='eventtop' className='container pt-40 text-center'>
            <div className='mb-16'>
                <h3 className='mb-4 primary'>A Glimpse of Events Done By Our Team</h3>
                <p className='lg:w-[40vw] center text-black'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='columns-1 gap-5 lg:gap-8 xl:gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-4 mb-16'>
            {
                serviceItems.map((item, i) => (
                    <img key={i} src={item.img} className='hover:scale-100 xl:hover:scale-125 xl:hover:shadow-xl hover:shadow-none duration-300 transition-all' alt="" />
                ))
            }
            </div>
            <button className='group btn round black'><a href='#eventtop' className='text-black group-hover:text-white'><p>Stay Tuned For More...</p></a></button>
        </section>
    )
}

export default EventGrid