import React from 'react'
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactForm = () => {
    return (
        <section>
            <div className='container px-20 bg-dark text-white text-center py-14 rounded-[1rem]'>
                <div className='mb-16'>
                    <h3 className='mb-4 primary'>Contact Us Here</h3>
                    <p className='lg:w-[40vw] center'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
                </div>

                <div className='flex gap-20'>
                    <div className='basis-2/3 flex flex-col gap-4'>
                        <h4 className='text-left'>Leave Us a Message</h4>
                        <input type="text" placeholder='Full Name' />
                        <input type="text" placeholder='Mail' />
                        <textarea className='h-[10rem]' name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button className='btn primary'><a href="/">Submit</a></button>
                    </div>
                    <div className='basis-1/3 h-10 text-left'>
                        <h4 className='mb-2'>Address</h4>
                        <p className='mb-6'>ABESIT Campus <br />
                            Near Crossing Republik, NE-3,<br />
                            Crossings Republik, Ghaziabad,<br />
                            Uttar Pradesh 201009</p>
                        <h4 className='mb-2'>Call Us</h4>
                        <p className='mb-6'>+91 82998 97560 <br />
                            +91 8851235065</p>
                        <div className='flex items-center gap-10'>
                            <h4>Reach Us:</h4>
                            <div className='flex gap-6'>
                                <a href='/' className='text-2xl'><IoIosMailUnread /></a>
                                <a href='/' className='text-2xl'><FaInstagram /></a>
                                <a href='/' className='text-2xl'><FaWhatsapp /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm