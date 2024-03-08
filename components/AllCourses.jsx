import { FaHeart } from 'react-icons/fa'
import { RiShoppingBag3Fill } from 'react-icons/ri'

const AllCourses = () => {

    const serviceItems = [
        {
            id: 1,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 2,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 3,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 4,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 5,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 6,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 7,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 8,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 9,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 10,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 11,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
        {
            id: 12,
            img: "course_img.jpg",
            name: "Basics of JAVA",
            level: "Beginner Level",
            des: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
            price: "Rs. 999/-",
            bagicon: <RiShoppingBag3Fill />,
            heart: <FaHeart />,
            tag: "View Course",
            buy: "Register Now"
        },
    ]


    return (
        <section id='coursetop' className='container text-center py-20'>
            <div className='mb-16'>
                <h3 className='mb-4 primary'>Collection of All Courses we Offer Here at IndiLearn</h3>
                <p className='lg:w-[40vw] center text-black'>Install our top-rated dropshipping app to your e-commerce site and so you can focus on creating a catalog of profitable products for your online store.</p>
            </div>
            <div className='w-max sticky top-6 mx-auto flex gap-10 z-10 mb-10'>
                <a href="" className='text-white font-semibold p-4 rounded-xl px-6 bg-black/90'><p>All Courses</p></a>
                <div className='lg:flex hidden items-center p-4 rounded-xl px-6 gap-6 border bg-white/90'>
                    <a href="" className='text-black font-semibold'><p>Development</p></a>
                    <a href="" className='text-black font-semibold'><p>Data Structures</p></a>
                    <a href="" className='text-black font-semibold'><p>AI / ML Model</p></a>
                    <a href="" className='text-black font-semibold'><p>UI / UX Design</p></a>
                </div>
            </div>
            <div className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 gap-8 mb-16'>
                {
                    serviceItems.map((item, i) => (
                        <div key={i} className='lg:w-[20rem] p-3 bborder hover:scale-105 text-black rounded-xl text-start duration-300 transition-all'>
                            <img src={item.img} className='mb-6' alt="" />
                            <div className='flex justify-between mb-4 items-center'>
                                <h4>{item.name}</h4>
                                <button className='btn sm'><small className='primary'>{item.level}</small></button>
                            </div>
                            <p className='mb-4'>{item.des}</p>
                            <h3 className='mb-3'>{item.price}</h3>
                            <div className='flex justify-between'>
                                <button className='btn'><a href="/courseDetail" className='text-[0.8rem]'>{item.tag}</a></button>
                                <button className='btn'><a href="/" className='text-[0.8rem]'>{item.buy}</a></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-4 justify-center'>
                <p className='text-gray-700'>Already Here??</p>
                <hr className=' lg:w-[40rem] w-[1rem] h-[1px] bg-gray-600' />
                <button className='group btn round black'><a href="#coursetop" className='text-black group-hover:text-white'><p>Go to Top!!</p></a></button>
            </div>
        </section>
    )
}

export default AllCourses