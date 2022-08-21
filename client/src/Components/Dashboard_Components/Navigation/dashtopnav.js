import React from 'react'
import icon from './logo.png'

function topnav() {
  return (
    <div className='flex flex-col justify-start '>
         <div id="upnavbar" className="flex flex-row justify-between ">
                    <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='py-2 pl-2 h-14 '/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
                    </a>           
            <div className='flex flex-row items-center p-2 text-2xl'>
                <i className="hidden lg:block md:block uil uil-moon mr-2 text-3xl"></i>
                <i className="hidden lg:block md:block uil uil-user-circle mr-2 text-3xl"></i>  
            </div>
        </div>
    </div>
  )
}

export default topnav