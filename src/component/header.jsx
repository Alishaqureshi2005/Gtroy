import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex bg-black text-yellow-400 justify-center sm:justify-end items-center py-2 sm:py-4 px-4 sm:px-10 font-bold gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base'> 
            <h1 className='hover:text-white transition-colors cursor-pointer'>SEARCH</h1>
            <span className='hidden sm:inline'>|</span>
            <h1 className='hover:text-white transition-colors cursor-pointer'>LOGIN</h1>
            <span className='hidden sm:inline'>|</span>
            <h1 className='hover:text-white transition-colors cursor-pointer'>REGISTER</h1>
        </div>
      
    </div>
  )
}

export default Header
