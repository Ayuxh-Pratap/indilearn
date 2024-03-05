import React from 'react'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-black py-20'>
            <div className='flex items-center lg:gap-0 gap-10 flex-col lg:flex-row justify-center lg:justify-around mb-10'>
                <h3>IndiLearn</h3>
                <ul className='flex lg:flex-row flex-col text-white text-center justify-center lg:flex-ror gap-8 lg:mb-0 mb-10'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="#instructors">Instructors</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#events">Events</a></li>
                </ul>
                <div className='flex gap-4'>
                    <a href="/"><FaHeart /></a>
                    <a href="/"><FaHeart /></a>
                    <a href="/"><FaHeart /></a>
                    <a href="/"><FaHeart /></a>
                </div>
            </div>
            <hr className='center w-[80vw] h-[1px] mb-10 bg-white' />
            <div className='center text-center'>
                <h5>Made With &#10084; under INDILEARN || INDIBUS</h5>
                <small>Copyright &copy; IndiBus || ABESIT , GHAZIABAD</small>
            </div>
        </footer>
    )
}

export default Footer