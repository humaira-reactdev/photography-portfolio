import React from 'react'
// import { useState } from 'react';

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
         <nav className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-4 py-4">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-6 h-6 bg-red-600 rounded-full"></div>
          <span className="text-white font-semibold text-lg">Mcap.</span> */}
          <img src="/images/Logo.png" alt="Logo" className="w-[96px] h-[42px]" />
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#project" className="hover:text-gray-300">Project</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#studio" className="text-red-600 hover:text-red-500">Studio</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>

      {/* Hamburger Menu for small screens */}
      {/* <div className="flex items-center md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div> */}

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="absolute top-0 right-0 w-2/3 h-screen bg-gray-800 flex flex-col items-start p-4 space-y-4 text-white md:hidden">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#project" className="hover:text-gray-300">Project</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#studio" className="text-red-600 hover:text-red-500">Studio</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )} */}
    </nav>

    
    </>
  )
}

export default Navbar