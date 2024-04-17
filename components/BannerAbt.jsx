import React from 'react'

const BannerAbt = () => {
    return (
        <section className='container px-5 bg-dark text-white text-center py-14 rounded-[1rem]'>
            <h2 className='primary font-medium text-[1.8rem] mb-6'>Join us</h2>
            <h3 className='lg:w-[40vw] w-auto leading-10 mb-8'>Join Us by Following Our Socials or Drop a Message</h3>
            <p className='lg:w-[40vw] w-auto mb-6'>Connect with Us: Join Our Vibrant Community, Stay Updated on Latest Events, Engage in Discussions, Share Ideas, and Grow Together with IndiLearn</p>
            <button className='btn primary mr-2'><a href="/">Follow Us</a></button>
            <button className='btn primary ml-2'><a href="/">Send a Hi</a></button>
        </section>
    )
}

export default BannerAbt