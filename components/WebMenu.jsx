import Link from 'next/link';
import React from 'react'

const WebMenu = ({ links }) => {
    return (
		<div className="w-full sm:w-auto hidden sm:block">
			<div className="flex gap-8 items-center">
				{links.map(({ text, path }, index) => {
					return (
						<Link
							key={index}
							href={path}
							className="hover:text-teal-400 text-black cursor-pointer duration-300 transition-all"
						>
							{text}
						</Link>
					);
				})}
                <button className='btn primary'><a href="/contact">Lets Talk</a></button>
			</div>
		</div>
	);
}

export default WebMenu