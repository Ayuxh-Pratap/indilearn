import React from 'react'

const Benefits = () => {

    const serviceItems = [
        {
            id: 1,
            no: "01",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
        {
            id: 2,
            no: "02",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
        {
            id: 3,
            no: "03",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
        {
            id: 4,
            no: "04",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
        {
            id: 5,
            no: "05",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
        {
            id: 6,
            no: "06",
            title: "Standardasation",
            des: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More",
        },
    ]

    return (
        <section className='container text-center'>
            <div className='mb-16 lg:px-10 text-black'>
                <h2>Benefits</h2>
                <h3 className='center lg:w-[45rem] mb-4'>We Offer Best Practices and Solutions for Your Learnings</h3>
                <p className='center lg:w-[40vw]'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='grid [&>*:nth-child(odd)]:bg-teal-100 lg:grid-cols-3 grid-cols-1 gap-6 mb-16'>
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
                <p className='text-gray-700'>Join as a Mentor</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="/" className='text-black group-hover:text-white'><p>Apply Here!</p></a></button>
            </div>
        </section>
    )
}

export default Benefits