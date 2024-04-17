import React from 'react'

const Events = () => {

    const serviceItems = [
        {
            id: 1,
            img: "eve1.jpeg",
            tag: "New",
            title: "Event for UI/UX and Designing",
            desc: "joined by more than 350+ students from all department a informative session is con..."
        },
        {
            id: 2,
            img: "eve2.jpeg",
            tag: "New",
            title: "Indilearn : Skills for Future  ",
            desc: "As we collabrate and turn your time more valuable and inspiring , we make sure to gro..."
        },
        {
            id: 3,
            img: "eve3.jpeg",
            tag: "HOT",
            title: "Kendriya Vidyalaya Chapter",
            desc: "We mark a new begning by intracting with these fresh minds about tech and engineering..."
        },
    ]

    return (
        <section id='events' className='container text-center'>
            <div className='text-black mb-16'>
                <h2>Our Events</h2>
                <h3 className='mb-4'>How We Meet and Connect With Our Community</h3>
                <p className='lg:w-[40rem] center'>Ignite Your Passion: Dive into a World of Learning and Inspiration with IndiLearn's Exciting Engineering Events and Workshops.</p>
            </div>
            <div className='flex flex-col lg:flex-row mb-16'>
                <div className='lg:basis-2/4 text-left lg:pr-10 lg:mb-0 mb-6 text-black'>
                    <img src="eve4.jpeg" className='mb-4 rounded-lg' alt="" />
                    <small className='btn sm primary mb-2'>HOT</small>
                    <h3 className='text-2xl '>Announcing the WebDev ABESIT Bootcamp with All the Departments and talking future Initiatives</h3>
                    <p className='mb-2'>all departments including CS/AI/IT nd IoT are made familiar with webdev boocamp and the carriculum with the selection process is released...</p>
                    <small><a href="/" className='text-black cursor-not-allowed'>Read More</a></small>
                </div>
                <div className='lg:basis-2/4 flex justify-between flex-col lg:pl-10'>
                    {
                        serviceItems.map((item, i) => (
                            <div key={i} className='flex gap-6 lg:mb-[0] mb-[3rem]'>
                                <img className='w-[11rem] rounded-lg aspect-square' src={item.img} alt="" />
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
            <button className='group btn round black cursor-not-allowed'><a className='text-black group-hover:text-white cursor-not-allowed'><p>View All Events</p></a></button>
            </div>
        </section>
    )
}

export default Events