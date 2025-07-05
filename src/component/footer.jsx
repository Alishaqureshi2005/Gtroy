import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black w-full text-white py-8 sm:py-12 mt-10'>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-15 px-4 sm:px-8 lg:px-16'>
          {/* Shop Section */}
          <div className='flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/4 font-bold'>
            <h1 className='text-xl sm:text-2xl mb-2'>Shop GO TROLLY</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>CHARGERS</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>WIRE</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>CABLES</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Accessories</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Parts</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Terms of Service</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Refund Policy</h1>
          </div>
          
          {/* Check This Out Section */}
          <div className='flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/4 font-bold'>
            <h1 className='text-xl sm:text-2xl mb-2'>Check This Out</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Customer Pics</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>REVIEWS</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Testimonials</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Partnerships</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>About Us</h1>
          </div>
          
          {/* Customer Service Section */}
          <div className='flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/4 font-bold'>
            <h1 className='text-xl sm:text-2xl mb-2'>Customer Service</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>About Us</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Contact Us</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Warranty</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Shipping</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Returns & Exchanges</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>FAQ's</h1>
          </div>
      
          {/* Contact Section */}
          <div className='flex flex-col items-center sm:items-start gap-2 w-full sm:w-1/4 font-bold'>
            <h1 className='text-xl sm:text-2xl mb-2'>Contact us</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>CALL 000-987-433-668</h1>
            <h1 className='text-sm sm:text-base hover:text-yellow-400 transition-colors cursor-pointer'>Email: GOTROLLY@GMAIL.com</h1>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className='flex flex-col mt-8 sm:mt-12'>
          <div className='border-t border-gray-700 mx-4 sm:mx-8 lg:mx-16'></div>
          <h1 className='p-4 sm:p-6 font-bold text-center text-sm sm:text-base'>All rights Reserved © 2023</h1>
        </div>
    </div>
  )
}

export default Footer
