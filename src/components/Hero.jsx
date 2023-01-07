import React from 'react'
import { FcSettings, FcShare, FcBarChart,FcCollaboration } from "react-icons/fc";
import bgImg from '../images/3d.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
         <div className='flex flex-col justify-center md:items-startw-full px-2py-8'>
          <p className='text-2xl'>production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Dockyards</h1>
          <p className='text-2xl'>this is our product</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
         </div>
      </div>
<div>
  <img  className="w-full" src={bgImg} alt="/" />
</div>
<div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1  md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl '>
  <p>Data Services</p>
  <div className='flex justify-between flex-wrap px-4'>
    <p className='flex px-4 py-2 text-slate-500'><FcSettings  className='h-6'/> Docks</p>
    <p className='flex px-4 py-2 text-slate-500'>< FcCollaboration className='h-6'/> Services</p>
    <p className='flex px-4 py-2 text-slate-500'>< FcShare className='h-6'/> Product</p>
    <p className='flex px-4 py-2 text-slate-500'>< FcBarChart className='h-6'/> About Us</p>
  </div>
</div>
    </div>
  )
}

export default Hero