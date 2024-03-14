"use client"
import React, { useState } from 'react'
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

const Navbar = () => {
  const links = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Services",
      path: "/AboutUs",
    },
    {
      text: "About Us",
      path: "/AboutUs",
    },
    {
      text: "Courses",
      path: "/courses",
    },
    {
      text: "Events",
      path: "/events",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4 fixed border-b-2 border-black z-[999] bg-white/80 backdrop-blur-md w-full ">
      <div className='container flex justify-between items-center'>
      <a href="/"><h1 className='text-3xl text-black'>IndiLearn</h1></a>
      <WebMenu links={links} />
      <div className="flex justify-end w-full sm:hidden ">
        <button
          className="btn primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Menu
        </button>
      </div>
      {open ? (
        <MobileMenu links={links} close={() => setOpen(false)} />
      ) : (
        <></>
      )}
      </div>
    </nav>
  );
}

export default Navbar