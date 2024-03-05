import React from 'react'

const FaqAbt = () => {

    const serviceItems = [
        {
            id: 1,
            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
        {
            id: 2,
            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
        {
            id: 3,
            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
        {
            id: 4,
            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
        {

            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
        {
            id: 6,
            title: "What is IndiLearn",
            des: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies",
        },
    ]

    return (
        <section className='container text-center'>
            <div className='mb-16 px-10 text-black'>
                <h2>Benefits</h2>
                <h3 className='center lg:w-[45rem] mb-4'>We Offer Best Practices and Solutions for Your Learning Experience</h3>
                <p className='center lg:w-[40vw]'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='border text-left shadow-sm rounded-[0.8rem] text-black bg-white p-5 cursor-pointer'>
                            <h4 className='mb-4'>{item.title}</h4>
                            <p className='mb-4'>{item.des}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
                <p className='text-gray-700'>Got a Question</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="/" className='text-black group-hover:text-white'><p>Ask Here!</p></a></button>
            </div>
        </section>
    )
}

export default FaqAbt