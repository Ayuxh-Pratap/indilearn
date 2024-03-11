import React from 'react'

const Scrolldown = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div>
                <h5 className='text-black rotate-90'>Scroll Down</h5>
            </div>
            <div class="scroll-container">
                <div class="scroller"></div>
            </div>
        </div>
    )
}

export default Scrolldown