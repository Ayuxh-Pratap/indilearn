import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 container'>
        <a href="/"><h1 className='text-3xl text-black'>IndiLearn</h1></a>
        <div className='flex gap-10 items-center'>
            <ul className='lg:flex gap-8 items-center hidden'>
                <li><a href="/" className='text-black'>Home</a></li>
                <li><a href="/" className='text-black'>Courses</a></li>
                <li><a href="/" className='text-black'>Instructors</a></li>
                <li><a href="/" className='text-black'>Services</a></li>
                <li><a href="/" className='text-black'>About Us</a></li>
                <li><a href="/" className='text-black'>Events</a></li>
            </ul>
            <button className='btn primary'><a href="/">Lets Talk</a></button>
        </div>
    </nav>
  )
}

export default Navbar