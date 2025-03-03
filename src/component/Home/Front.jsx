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
      <div className='w-[80%] mt-10 m-auto h-[80vh] flex items-center justify-around'>
        <div className=' w-[800px] h-[400px] flex flex-col justify-center items-center gap-20'>
          <h1 className='text-4xl text-gray-600 font-bold text-center'>Bank Introduces New Easy-to-Use Online Banking Platform</h1>
          {/* <p className='text-xl w-[500px] text-white bg-gradient-to-tr to-green-300 from-blue-500 p-4 rounded-md font-bold'>Our Bank has launched a new online banking platform designed to make managing your money simpler and faster. With features like quick transactions, easy access to account details, and helpful tips, customers can now handle their banking needs anytime, anywhere, all from their phones or computers. This upgrade aims to give users a smooth and convenient banking experience.</p> */}
          <ul className='w-[500px] min-h-[300px] flex flex-col gap-4'>
            <li className='text-xl  font-medium p-4 relative bg-gradient-to-br to-sky-400 from-pink-500 text-white rounded-md'>New Online Banking Platform: </li>
            <li className='text-xl left-20 font-medium p-4 relative bg-gradient-to-br to-gray-900 from-violet-500 text-white rounded-md'>Simplified Money Management: </li>
            <li className='text-xl  font-medium p-4 relative bg-gradient-to-br to-sky-400 from-pink-500 text-white rounded-md'>Anytime, Anywhere Access: </li>
            <li className='text-xl left-20  font-medium p-4 relative bg-gradient-to-br to-gray-900 from-violet-500 text-white rounded-md ' >Enhanced User Experience: </li>
          </ul>
        </div>

        <div className='rounded-xl overflow-hidden w-[800px] h-[600px] relative flex justify-center items-center flex-col'>
          <BsBank className='text-8xl text-gray-600'/>
          <h1 className=' z-40 text-8xl top-40 left-24 text-white font-bold'
            style={{
              backgroundImage: `url(${mainPage})`,
              backgroundPosition: "0px",
              color: "transparent",
              backgroundClip: 'text'
            }}
          ><span>Your</span><span>Bank</span></h1>
          <ul className='flex gap-4'>
            <li className='w-34 h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <AiFillSafetyCertificate className='text-8xl text-violet-500'/></li>
            <li className='w-34 h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <FaRegCreditCard className='text-8xl text-cyan-600'/></li>
            <li className='w-34 h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <HiMiniCurrencyRupee className='text-8xl text-gray-800'/></li>
            <li className='w-34 h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition:"all .3s linear"
          }}>
              <CgProfile className='text-8xl text-blue-500'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Front