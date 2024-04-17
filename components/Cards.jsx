import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const Cards = ({ item }) => {

    const [isHeartFillted, setIsHeartFillted] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted)
    }

    return (
        <div className='flex gap-5 justify-center md:pt-10 w-[94%] mx-auto'>
            <div className='lg:w-[45rem] bg-white text-black lg:p-10 p-6 rounded-xl'>
            <div className='flex gap-4 items-center mb-6'>
                <img className='w-[3rem] h-[3rem] rounded-full' src={item.img} alt="" />
                <div>
                    <h4 className='text-[1.4rem]'>{item.name}</h4>
                    <p>{item.post}</p>
                </div>
            </div>
            <p>{item.des}</p>
        </div>
        </div>
    )
}

export default Cards