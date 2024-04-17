import React from 'react'
import { TbPointFilled } from "react-icons/tb";


const CourseDetail = () => {
    return (
        <section className='lg:container lg:pt-[5rem] pt-0 lg:relative'>
            <div className='bg-teal-200 lg:pt-[0rem] pt-[6rem]'>
                <div className='lg:w-[60%] w-full p-10 text-black'>
                    <h3 className='mb-6'>
                       Basic to Advance : UI/UX Workshop
                    </h3>
                    <p>
                        Craft user experiences that leave a lasting impression with our UI/UX Workshop. In today's digital landscape, the design of your website or application can make all the difference. This workshop is designed for designers, developers, and anyone interested in creating intuitive and visually appealing user interfaces. Dive into the principles of user-centered design, learn the latest tools and techniques, and master the art of creating seamless user experiences. Whether you're designing a website, app, or software interface, this workshop equips you with the skills to captivate and engage your audience.
                    </p>

                </div>
            </div>
            <div className='text-black shadow-lg lg:mt-0 mt-6 bg-white rounded-3xl lg:w-[30%] w-[90%] mx-auto lg:absolute right-16 top-[10rem] p-5'>
                <img className='mb-4' src="course_img.jpg" alt="" />
                <h4>Rs. 199/-</h4>
                <small className='mb-2'>Hurry Up , 50% Discount May End Soon</small> <br />
                <button className='btn mb-6'><a href="https://forms.gle/a5Qit4tHXK5UYJvn7">Register Now</a></button>
                <h5 className='mb-2'>This Course Include</h5>
                <li>Language - English/Hindi</li>
                <li>Use of Desktop/Laptop</li>
                <li>Full Doubt Access</li>
                <li>Certificate on Complition</li>
                <hr className='w-[90%] h-10px text-black mb-6' />
                <h5 className='mb-2'>Training Include</h5>
                <p className='mb-2'>Expert-led interactive sessions covering UI/UX fundamentals and advanced concepts. Hands-on exercises and projects to apply learned principles in real-world scenarios..</p>
            </div>
            <div>
                <div>
                    <div className='text-black lg:w-[60%] w-full p-10'>
                        <h4>
                            Course Description
                        </h4>
                        <p className='mb-8'>
                            Immerse yourself in the world of User Interface (UI) and User Experience (UX) design with our intensive UI/UX Workshop. This hands-on course is designed for individuals passionate about creating visually stunning and user-friendly digital experiences. Dive into the principles of design thinking, user research, prototyping, and usability testing.
                        </p>
                        <h4>
                            Course Outcome
                        </h4>
                        <div className='mb-8 flex flex-col gap-1'>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Master the fundamentals of UI/UX design principles and best practices.</div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Learn to conduct user research and apply design thinking methodologies.
                            </div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Develop wireframes, prototypes, and interactive designs using industry-standard tools.</div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Gain insights into information architecture, usability, and accessibility.
                            </div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Create visually appealing and intuitive interfaces for web and mobile applications.</div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Collaborate with peers on real-world design projects to build your portfolio.
                            </div>
                        </div>
                        <h4>
                            Certification
                        </h4>
                        <p className='mb-8'>
                        Upon successful completion of the UI/UX Workshop, you will receive a certificate of achievement. This certification validates your skills and knowledge in UI/UX design, showcasing your expertise to potential employers or clients.
                        </p>
                        <h4>
                            Who Can Buy This Coures
                        </h4>
                        <p className='mb-10 flex flex-col gap-1'>
                        <div className='flex items-center gap-2'>
                                <TbPointFilled />Aspiring UI/UX designers seeking to start a career in the field.</div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Web developers interested in enhancing their design skills.
                            </div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled /> Graphic designers looking to transition into digital product design.</div>
                            <div className='flex items-center gap-2'>
                                <TbPointFilled />Product managers, marketers, and entrepreneurs wanting to understand user-centric design principles.
                            </div>
                        </p>
                        <button className='group btn round black'><a className='text-black group-hover:text-white' href="https://forms.gle/a5Qit4tHXK5UYJvn7">Register Now</a></button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail