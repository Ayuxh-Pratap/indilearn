import React from 'react'

const Events = () => {

    const serviceItems = [
        {
            id: 1,
            img: "eve_small.jpg",
            tag: "New",
            title: "Class Technologies Inc.",
            desc: "Class Technologies Inc., the company that created Class,...Class Technologies Inc.,"
        },
        {
            id: 2,
            img: "eve_small.jpg",
            tag: "New",
            title: "Class Technologies Inc.",
            desc: "Class Technologies Inc., the company that created Class,..Class Technologies Inc.,."
        },
        {
            id: 3,
            img: "eve_small.jpg",
            tag: "New",
            title: "Class Technologies Inc.",
            desc: "Class Technologies Inc., the company that created Class,...Class Technologies Inc.,"
        },
    ]

    return (
        <section id='events' className='container text-center'>
            <div className='text-black mb-16'>
                <h2>Our Events</h2>
                <h3 className='mb-4'>How We Meet and Connect With Our Community</h3>
                <p className='lg:w-[40rem] center'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='flex flex-col lg:flex-row mb-16'>
                <div className='lg:basis-2/4 text-left lg:pr-10 lg:mb-0 mb-6 text-black'>
                    <img src="eve_big.jpg" className='mb-4' alt="" />
                    <small className='btn sm primary mb-2'>NEW</small>
                    <h3 className='text-2xl '>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                    <p className='mb-2'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <small><a href="/" className='text-black'>Read More</a></small>
                </div>
                <div className='lg:basis-2/4 flex justify-between flex-col lg:pl-10'>
                    {
                        serviceItems.map((item, i) => (
                            <div key={i} className='flex gap-6 lg:mb-[0] mb-[3rem]'>
                                <img className='w-[11rem] rounded-xl aspect-square' src={item.img} alt="" />
                                <div className='text-left text-black'>
                                    <small className='btn sm primary mb-3'>{item.tag}</small>
                                    <h3 className='text-xl mb-2'>{item.title}</h3>
                                    <p className='text-[1rem] '>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
            <button className='group btn round black'><a href="/events" className='text-black group-hover:text-white'><p>View All Events</p></a></button>
            </div>
        </section>
    )
}

export default Events