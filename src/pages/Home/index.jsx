import React from 'react'

import Image1 from '../../media/phones/1.webp'
import Datapin from '../../media/powerbankandcharger/datapin.webp'
import { CiStar } from 'react-icons/ci'
import Charging from '../../media/powerbankandcharger/chargingpin.webp'
import Powerbank from '../../media/powerbankandcharger/powerbank.webp'
import Cabile from '../../media/powerbankandcharger/cabile.webp'
import Flash from '../../media/flashsale.png'
// import CiStar from '../../media/ci-star.png'
const Home = () => {
  return (
    <div className='flex flex-col mt-4 sm:mt-10' >
        {/* Hero Banner */}
        <div className='px-2 sm:px-0'>
          <img src={Flash} alt="Flash Sale Banner" className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg' />
        </div>
        
        {/* Section Headers */}
        <div className='flex flex-col sm:flex-row text-black font-bold gap-1 sm:gap-2 text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-10 px-4 sm:px-10 justify-center sm:justify-start'>
            <h1>DAILY DEALS</h1>
            <span className='hidden sm:inline'>|</span>
            <h1>FLASH SALE</h1>
            <span className='hidden sm:inline'>|</span>
            <h1>VIEW MORE</h1>
        </div>
        
        {/* Product Cards */}
        <div className='px-2 sm:px-6'>
          <div className='flex flex-col sm:flex-row bg-black mt-6 sm:mt-10 rounded-lg overflow-hidden'>
            {/* Product Card 1 */}
            <div className='flex flex-col text-white py-4 px-4 w-full sm:w-1/2 lg:w-1/4'>
                <div className='w-full'>
                  <img src={Powerbank} alt="Power Bank" className='w-full h-48 sm:h-56 object-contain'/>
                </div>
                <div className='mt-4'>
                    <h1 className='font-bold text-lg sm:text-xl'>Charger and power bank</h1>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-14 mt-2'>
                      <div className='flex gap-2'>
                        <h1 className='text-xl sm:text-2xl font-bold line-through'>RS 2300</h1>
                        <h1 className='text-lg sm:text-xl mt-1 sm:mt-3'>RS 2000</h1>
                      </div>
                      <div className='flex justify-start sm:justify-end'>
                        <h1 className='border-1 bg-amber-300 text-black px-3 py-1 text-sm font-bold rounded'>-23%</h1>
                      </div>
                    </div>
                </div>
            </div>
         
            {/* Product Card 2 */}
            <div className='flex flex-col text-white py-4 px-4 w-full sm:w-1/2 lg:w-1/4'>
                <div className='w-full'>
                  <img src={Charging} alt="Charging Cable" className='w-full h-48 sm:h-56 object-contain'/>
                </div>
                <div className='mt-4'>
                    <h1 className='font-bold text-lg sm:text-xl'>CHARGING AND DATA CABLE</h1>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-14 mt-2'>
                      <div className='flex gap-2'>
                        <h1 className='text-xl sm:text-2xl font-bold line-through'>RS 1500</h1>
                        <h1 className='text-lg sm:text-xl mt-1 sm:mt-3'>RS 1460</h1>
                      </div>
                      <div className='flex justify-start sm:justify-end'>
                        <h1 className='border-1 bg-amber-300 text-black px-3 py-1 text-sm font-bold rounded'>-10%</h1>
                      </div>
                    </div>
                </div>
            </div>
       
            {/* Product Card 3 */}
            <div className='flex flex-col text-white py-4 px-4 w-full sm:w-1/2 lg:w-1/4'>
                <div className='w-full'>
                  <img src={Image1} alt="Phone Case" className='w-full h-48 sm:h-56 object-contain'/>
                </div>
                <div className='mt-4'>
                    <h1 className='font-bold text-lg sm:text-xl'>MINIMAL PHONE CASE</h1>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-14 mt-2'>
                      <div className='flex gap-2'>
                        <h1 className='text-xl sm:text-2xl font-bold line-through'>RS 1200</h1>
                        <h1 className='text-lg sm:text-xl mt-1 sm:mt-3'>RS 1150</h1>
                      </div>
                      <div className='flex justify-start sm:justify-end'>
                        <h1 className='border-1 bg-amber-300 text-black px-3 py-1 text-sm font-bold rounded'>-15%</h1>
                      </div>
                    </div>
                </div>
            </div>
        
            {/* Product Card 4 */}
            <div className='flex flex-col text-white py-4 px-4 w-full sm:w-1/2 lg:w-1/4'>
                <div className='w-full'>
                  <img src={Cabile} alt="Cables" className='w-full h-48 sm:h-56 object-contain'/>
                </div>
                <div className='mt-4'>
                    <h1 className='font-bold text-lg sm:text-xl'>CABLES</h1>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-14 mt-2'>
                      <div className='flex gap-2'>
                        <h1 className='text-xl sm:text-2xl font-bold line-through'>RS 3500</h1>
                        <h1 className='text-lg sm:text-xl mt-1 sm:mt-3'>RS 3450</h1>
                      </div>
                      <div className='flex justify-start sm:justify-end'>
                        <h1 className='border-1 bg-amber-300 text-black px-3 py-1 text-sm font-bold rounded'>-10%</h1>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className='flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-10'>
            <div className='w-4 sm:w-5 rounded-full bg-yellow-400 h-4 sm:h-5'></div>
            <div className='w-4 sm:w-5 rounded-full bg-black h-4 sm:h-5'></div>
            <div className='w-4 sm:w-5 rounded-full bg-black h-4 sm:h-5'></div>
            <div className='w-4 sm:w-5 rounded-full bg-black h-4 sm:h-5'></div>
        </div>
        
        {/* Customer Reviews Section */}
        <div className='mt-8 sm:mt-10 px-4 sm:px-10'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10'>CUSTOMER REVIEWS</h1>
          
          <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
            {/* Review Card 1 */}
            <div className='flex flex-col sm:flex-row border border-amber-300 rounded-lg p-4 w-full lg:w-1/3'>
                <div className='w-full sm:w-1/3 lg:w-1/2 mb-4 sm:mb-0'>
                  <img src={Datapin} alt="Review" className='w-full h-32 sm:h-40 object-cover rounded' />
                </div>
                <div className='flex flex-col font-bold w-full sm:w-2/3 lg:w-1/2 sm:ml-4'>
                    <h1 className='text-lg sm:text-xl mb-2'>AYESHA TAHIR</h1>
                    <div className='flex gap-1 sm:gap-2 text-black text-xl sm:text-2xl mb-2'>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                    </div>
                    <p className='text-sm sm:text-base'>Really satisfied. I just got my order from GoTrolly and I completely love it!</p>
                </div>
            </div>  
            
            {/* Review Card 2 */}
            <div className='flex flex-col sm:flex-row border border-amber-300 rounded-lg p-4 w-full lg:w-1/3'>
                <div className='w-full sm:w-1/3 lg:w-1/2 mb-4 sm:mb-0'>
                  <img src={Datapin} alt="Review" className='w-full h-32 sm:h-40 object-cover rounded' />
                </div>
                <div className='flex flex-col font-bold w-full sm:w-2/3 lg:w-1/2 sm:ml-4'>
                    <h1 className='text-lg sm:text-xl mb-2'>AHMAD RAZA</h1>
                    <div className='flex gap-1 sm:gap-2 text-black text-xl sm:text-2xl mb-2'>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                    </div>
                    <p className='text-sm sm:text-base'>Never unsatisfied. I will order one more as my mom needs one as well.</p>
                </div>
            </div> 
            
            {/* Review Card 3 */}
            <div className='flex flex-col sm:flex-row border border-amber-300 rounded-lg p-4 w-full lg:w-1/3'>
                <div className='w-full sm:w-1/3 lg:w-1/2 mb-4 sm:mb-0'>
                  <img src={Datapin} alt="Review" className='w-full h-32 sm:h-40 object-cover rounded' />
                </div>
                <div className='flex flex-col font-bold w-full sm:w-2/3 lg:w-1/2 sm:ml-4'>
                    <h1 className='text-lg sm:text-xl mb-2'>MANZOOR BALTI</h1>
                    <div className='flex gap-1 sm:gap-2 text-black text-xl sm:text-2xl mb-2'>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                      <span><CiStar/></span>
                    </div>
                    <p className='text-sm sm:text-base'>The order was delivered today and it was nicely packed. The wire works great thanks GoTrolly.</p>
                </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Home
