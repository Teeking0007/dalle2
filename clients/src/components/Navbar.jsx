import openai from '../assets/openai.png';
import { Link } from 'react-router-dom'


import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-16 py-6  '>
      <Link to='/'>
      <div className='flex justify-between align-middle gap-2 font-bold '>
        <img src={openai} alt='logo' width='36' height='36'/>
        <span className='mt-2' >KINGS AI</span>
      </div>
      </Link>
      <Link to='/collections' >
        <button className='bg-[#7F00FF] text-white px-4 py-1 b-r-2'>Collections</button>
      </Link>
    </div>
  )
}

export default Navbar