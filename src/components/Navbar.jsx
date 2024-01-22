import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Hello there</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
            <AiOutlineMenu size={20}/>
        <div className='fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800' >
            <ul>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar