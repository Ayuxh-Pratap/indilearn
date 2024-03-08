import React from 'react'

const CourseDetail = () => {
    return (
        <section className='lg:container lg:pt-[5rem] pt-0 lg:relative'>
            <div className='bg-teal-200'>
                <div className='lg:w-[60%] w-full p-10 text-black'>
                    <h3 className='mb-6'>
                        Complete WebDev Bootcamp ABESIT
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus esse nulla totam iure alias similique ex repudiandae non dignissimos est eos blanditiis, molestiae fugiat voluptatem, numquam labore facilis perferendis quibusdam optio mollitia excepturi autem! Inventore est ab illum saepe neque!
                    </p>

                </div>
            </div>
            <div className='text-black shadow-lg lg:mt-0 mt-6 bg-white rounded-3xl lg:w-[30%] w-[90%] mx-auto lg:absolute right-16 top-[10rem] p-5'>
                <img className='mb-4' src="course_img.jpg" alt="" />
                <h4>Rs. 999/-</h4>
                <small className='mb-2'>Hurry Up , 50% Discount May End Soon</small> <br />
                <button className='btn mb-6'><a href="/">Register Now</a></button>
                <h5 className='mb-2'>This Course Include</h5>
                <li>Language - English/Hindi</li>
                <li>Use on Desktop/Laptop</li>
                <li>Full Doubt Access</li>
                <li>Certificate on Complition</li>
                <hr className='w-[90%] h-10px text-black mb-6' />
                <h5 className='mb-2'>Training Include</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, illo.</p>
                <hr className='w-[90%] h-10px text-black mb-6' />
                <a href="">Socials</a>
            </div>
            <div>
                <div>
                    <div className='text-black lg:w-[60%] w-full p-10'>
                        <h4>
                            Course Description
                        </h4>
                        <p className='mb-8'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore commodi necessitatibus reprehenderit? Culpa perspiciatis repudiandae, similique impedit temporibus laborum.
                        </p>
                        <h4>
                            Course Outcome
                        </h4>
                        <p className='mb-8'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae totam dolorum, error ex corporis ipsam eius quam! Aliquam, itaque eius.
                        </p>
                        <h4>
                            Certification
                        </h4>
                        <p className='mb-8'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deleniti veritatis voluptatibus! Ipsa voluptates nisi quasi quae cum iure unde.
                        </p>
                        <h4>
                            Who Can Buy This Coures
                        </h4>
                        <p className='mb-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore!
                        </p>
                        <button className='group btn round black'><a className='text-black group-hover:text-white' href="/">Register Now</a></button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail