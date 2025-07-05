import React from 'react'
import Phone from '../../media/image.png'
import Camera from '../../media/powerbankandcharger/image.png'
import Flash from '../../media/earbudandcemera/flashlight.webp'
import Laptop from '../../media/earbudandcemera/image.png'
import Cable from '../../media/powerbankandcharger/datapin.webp'
import Audio from '../../media/audio.png'
import Phonecase from '../../media/phonecase.png'
import { GoStarFill } from 'react-icons/go'
import Stand from '../../media/earbudandcemera/image.png'




const Newarrivals = () => {
  return (
    <div>
      {/* 1st */}
      <div className='bg-yellow-400 px-6 py-2 grid grid-cols-3  gap-4'>
              <div className='bg-white text-black flex w-full  p-2'>
              <div className='w-full'><img src={Stand} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>CAMERA STAND </h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-18'>RS 75000</h1>
              </div>
              {/*  */}
              
            </div>
            {/*  */}
             <div className='bg-white text-black flex w-full p-2 '>
              <div className='w-full'><img src={Cable} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>CAMERA HOLDER</h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-18'>RS 55000</h1>
              </div>
              {/*  */}
              
            </div>
             <div className='bg-white text-black flex w-full  p-2'>
              <div className='w-full'><img src={Cable} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>CABLE WIRE</h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-25'>RS 10000</h1>
              </div>
              {/*  */}
              
            </div>
             <div className='bg-white text-black flex w-full p-2'>
              <div className='w-full'><img src={Cable} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>CAMERA STAND </h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-18'>RS 80999</h1>
              </div>
              {/*  */}
              
            </div>
             <div className='bg-white text-black flex w-full p-2 '>
              <div className='w-full'><img src={Cable} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>EAR PHONES </h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-25'>RS 35000</h1>
              </div>
              {/*  */}
              
            </div>
             <div className='bg-white text-black flex w-full p-2 '>
              <div className='w-full'><img src={Cable} alt="" className='w-full' /></div>
              <div className='flex flex-col font-bold text-xl px-4 py-2 '><h1>SMART WATCH</h1>
                                   <div className='flex gap-2 text-black text-2xl  '>
                       <span ><GoStarFill /></span>
                          <span ><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span>
                          <span><GoStarFill /></span></div>
              <h1 className='relative top-18'>RS 10000</h1>
              </div>
              {/*  */}
              
            </div>
            
            {/*  */}
            <div>
      
            </div>
            {/* <div className='flex justify-end '><h1 className='border-1 bg-amber-300  px-6 py-2 justify-center items-center flex'>-15%</h1></div> */}
            </div>
            <div className='mt-10'><h1 className='text-3xl font-bold text-center '>TRENDING NOW </h1></div>
      {/* 2nd */}
      <div className='flex flex-col'>
        <div className='w-[100%]'><img src={Phone}  alt="" className='w-full' /></div>
        <div className='w-[100%] '><img src={Audio}  alt="" className='w-full ' /></div>
        <div className='w-[100%] '><img src={Phonecase}  alt="" className='w-full ' /></div>


      </div>
      
      {/*  */}
      <div className='mt-10'><h1 className='text-2xl font-bold text-center '>CATEGORIES</h1></div>
      <div className='flex gap-10 px-10 mt-10 '>
        <div className='w-[30%] h-[400px] border-1 border-amber-400 '>
            <div className='w-[100%] px-4'><img src={Flash} alt=""  className='w-full'/></div>
            <div className='bg-yellow-500  w-[100%]  gap-14 flex flex-col py-10'><h1 className='text-center font-bold text-3xl'>FLASH LIGHTS</h1>
          
                    </div>
        </div>
        <div className='w-[30%] h-[400px] border-1 border-amber-400 '>
            <div className='w-[100%] px-4'><img src={Camera} alt=""  className='w-full'/></div>
            <div className='bg-yellow-500  w-[100%]  gap-14 flex flex-col py-10'><h1 className='text-center font-bold text-3xl'>CAMERA BAGS</h1>
          
                    </div>
        </div>
        <div className='w-[30%] h-[400px] border-1 border-amber-400 '>
            <div className='w-[100%] px-4'><img src={Laptop} alt=""  className='w-full'/></div>
            <div className='bg-yellow-500  w-[100%]  gap-14 flex flex-col py-10'><h1 className='text-center font-bold text-3xl'>LAPTOP STANDS</h1>
          
                    </div>
        </div>


      </div>
      
    </div>
  )
}

export default Newarrivals
