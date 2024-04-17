import React from 'react'
import { FaGithubSquare, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


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
                <div className='flex gap-6'>
                    <li><a className='text-2xl' href="https://www.instagram.com/indilearn.in/" target="_blank"><FaInstagram /></a></li>
                    <li><a className='text-2xl' href="https://www.linkedin.com/company/indilearn/" target="_blank"><FaLinkedin /></a></li>
                    <li><a className='text-2xl' href="https://github.com/indilearn" target="_blank"><FaGithubSquare /></a></li>
                    <li><a className='text-2xl' href="https://twitter.com/indibus23" target="_blank"><FaTwitter /></a></li>
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