import React from 'react'
import { FcSettings, FcShare, FcBarChart,FcCollaboration } from "react-icons/fc";
import bgImg from '../images/cyber-bg.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Dockyards</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Container Management</h1>
                <p className='text-2xl'>This is our brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className=' flex flex-col  py-6  md:min-w-[760px] bottom-[5%]
            mx-1 mt-22 md:left-1/3 transform md:-translate-x-2/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl sm:min-w-[600px] relative '>
              <p>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><FcSettings  className='h-6'/> Docks</p>
            <p className='flex px-4 py-2 text-slate-500'>< FcBarChart className='h-6'/> Services</p>
            <p className='flex px-4 py-2 text-slate-500'>< FcShare className='h-6'/> Product</p>
            <p className='flex px-4 py-2 text-slate-500'>< FcCollaboration  className='h-6'/> About Us</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

