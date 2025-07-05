import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../media/navlogo.png'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <NavLink to='/' className='w-[120px] sm:w-[150px]'>
            <img src={Logo} alt="Logo" className='w-full' />
          </NavLink>
          
          {/* Desktop Navigation */}
          <ul className='hidden md:flex gap-4 lg:gap-6 font-bold text-sm lg:text-base'>
            <li><NavLink to='/Flashsale' className='hover:text-yellow-500 transition-colors'>FLASH SALE</NavLink></li>
            <li><NavLink to='/Newarrivals' className='hover:text-yellow-500 transition-colors'>NEW ARRIVALS</NavLink></li>
            <li><NavLink to='/Product' className='hover:text-yellow-500 transition-colors'>PRODUCTS</NavLink></li>
            <li><NavLink to='/Topselling' className='hover:text-yellow-500 transition-colors'>TOP SELLINGS</NavLink></li>
            <li><NavLink to='/Audio' className='hover:text-yellow-500 transition-colors'>AUDIO</NavLink></li>
            <li><NavLink to='/smartphone' className='hover:text-yellow-500 transition-colors'>SMART PHONE</NavLink></li>
            <li><NavLink to='/chargingandpower' className='hover:text-yellow-500 transition-colors'>CHARGINGS AND POWER</NavLink></li>
            <li><NavLink to='/project' className='hover:text-yellow-500 transition-colors'>PROJECTS</NavLink></li>
          </ul>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-yellow-500 focus:outline-none focus:text-yellow-500'
            >
              {isOpen ? <HiX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'>
              <NavLink to='/Flashsale' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>FLASH SALE</NavLink>
              <NavLink to='/Newarrivals' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>NEW ARRIVALS</NavLink>
              <NavLink to='/Product' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>PRODUCTS</NavLink>
              <NavLink to='/Topselling' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>TOP SELLINGS</NavLink>
              <NavLink to='/Audio' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>AUDIO</NavLink>
              <NavLink to='/smartphone' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>SMART PHONE</NavLink>
              <NavLink to='/chargingandpower' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>CHARGINGS AND POWER</NavLink>
              <NavLink to='/project' className='block px-3 py-2 text-sm font-bold hover:text-yellow-500 transition-colors'>PROJECTS</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
