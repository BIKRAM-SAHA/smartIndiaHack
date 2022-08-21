import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function Home() {

  return (
    <div className='h-128 relative min-w-fit md:mx-10'>
      <div className="flex items-center justify-center ">
      <div className="absolute -right-14 top-36">
        <a href="#about" className='flex flex-row items-end rotate-90 '>
          <span className="text-3xl font-bold -translate-y-2 text-slate-300">LEARN MORE</span>
        </a>
      </div>
      
      <div className="absolute top-0 w-28 rounded-3xl min-height-75 h-14 right-12 bg-gradient-to-b from-orange-500">
      </div>
      <h1 className="absolute flex flex-col font-semibold left-4 top-14 text-slate-700">
        <span className="text-2xl font-pops text-slate-500">REALTIME</span>
        <span className="text-5xl font-pops">STUDENT</span>
        <span className="text-6xl font-pops">LEARNING</span>
        <div className="flex flex-row justify-between">
        <i class="uil uil-angle-double-down text-5xl font-bold font-pops"></i>
        <span className="flex justify-end text-4xl font-pops text-slate-500">OUTCOME</span> 
        </div>      
      </h1>
      <Player className='relative top-64 right-1'
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
        style={{ height: '360px', width: '360px' }}
      >
      </Player>
      </div>
    </div>
  )
}

export default Home