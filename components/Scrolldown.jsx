import React from 'react'

const Scrolldown = () => {
    return (
        <a href='#services' className='flex flex-col justify-center items-center gap-10'>
            <div>
                <h5 className='text-black/70 rotate-90'>Scroll Down</h5>
            </div>
            <div className="scroll-container">
                <div className="scroller"></div>
            </div>
        </a>
    )
}

export default Scrolldown