import React from 'react'

const Banner = () => {
  return (
    <section className='container px-5 bg-dark text-white text-center py-14 rounded-[1rem]'>
      <h2 className='primary font-medium text-[1.8rem] mb-6'>Join us</h2>
      <h3 className='lg:w-[40vw] w-auto leading-10 mb-8'>Join Us by Following Our Socials or Drop a Message</h3>
      <p className='lg:w-[40vw] w-auto mb-6'>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
      <div className='flex justify-center gap-4'>
        <button className='btn'><a href="/courseDetail" className='text-[0.8rem]'>Follow Us</a></button>
        <button className='btn'><a href="/contact" className='text-[0.8rem]'>Send a Hi!</a></button>
      </div>
    </section >
  )
}

export default Banner