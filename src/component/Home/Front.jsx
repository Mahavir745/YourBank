import React from 'react'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";


const Front = () => {
  return (
    <div>
      <div className='w-full p-2 mt-10 m-auto h-full flex flex-col sm:flex-row items-center justify-around gap-20'>
        <div className=' w-full lg:w-[500px] h-[500px] flex flex-col justify-center items-center gap-20'>
          <h1 className='text-3xl text-gray-600 font-bold text-center'>Bank Introduces New Easy-to-Use Online Banking Platform</h1>
          <ul className='w-full min-h-[300px] flex flex-col gap-4'>
            <li className='text-xl  font-medium p-4 relative bg-gradient-to-br to-sky-400 from-pink-500 text-white rounded-md'>New Online Banking Platform: </li>
            <li className='text-xl lg:left-20 font-medium p-4 relative bg-gradient-to-br to-gray-900 from-violet-500 text-white rounded-md'>Simplified Money Management: </li>
            <li className='text-xl  font-medium p-4 relative bg-gradient-to-br to-sky-400 from-pink-500 text-white rounded-md'>Anytime, Anywhere Access: </li>
            <li className='text-xl lg:left-20  font-medium p-4 relative bg-gradient-to-br to-gray-900 from-violet-500 text-white rounded-md ' >Enhanced User Experience: </li>
          </ul>
        </div>

        <div className='rounded-xl overflow-hidden w-full lg:w-[700px] h-[400px] sm:h-[600px] relative flex justify-center items-center flex-col'>
          <BsBank className='text-8xl text-gray-600'/>
          <h1 className=' z-20 text-6xl sm:text-4xl sm:top-40 sm:left-24 text-white font-bold lg:text-8xl'
            style={{
              backgroundImage: `url(${mainPage})`,
              backgroundPosition: "0px",
              color: "transparent",
              backgroundClip: 'text'
            }}
          ><span>Your</span><span>Bank</span></h1>
          <ul className='flex gap-4 mt-10'>
            <li className='sm:w-14 sm:h-14 lg:w-34 lg:h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <AiFillSafetyCertificate className='text-7xl sm:text-8xl text-violet-500'/></li>
            <li className='sm:w-14 sm:h-14 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <FaRegCreditCard className='text-7xl sm:text-8xl text-cyan-600'/></li>
            <li className='sm:w-14 sm:h-14 lg:w-34 lg:h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <HiMiniCurrencyRupee className='text-7xl sm:text-8xl text-gray-800'/></li>
            <li className='sm:w-14 sm:h-14 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <CgProfile className='text-7xl sm:text-8xl text-blue-500'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Front