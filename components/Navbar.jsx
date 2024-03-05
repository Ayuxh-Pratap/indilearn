import React from 'react'

/* fixed nav classes :- fixed top-0 left-0 w-full bg-white/90 z-10 */

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center py-4 container'>
        <a href="/"><h1 className='text-3xl text-black'>IndiLearn</h1></a>
        <div className='flex gap-10 items-center'>
          <ul className='lg:flex gap-8 items-center hidden'>
            <li><a href="/" className='text-black'>Home</a></li>
            <li><a href="/" className='text-black'>Courses</a></li>
            <li><a href="/" className='text-black'>Instructors</a></li>
            <li><a href="/" className='text-black'>Services</a></li>
            <li><a href="/AboutUs" className='text-black'>About Us</a></li>
            <li><a href="/" className='text-black'>Events</a></li>
          </ul>
          <button className='btn primary'><a href="/contact">Lets Talk</a></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar