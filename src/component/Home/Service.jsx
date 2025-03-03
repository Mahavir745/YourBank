import React from 'react'
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { SiGooglebigquery } from "react-icons/si";
import { CgProfile } from 'react-icons/cg'


const Service = () => {
  return (
    <div className=''>
      <div className=' w-full min-h-[500px] m-auto p-4 mt-14'>
        <h1 className='text-4xl text-gray-600 text-center font-bold w-full mb-20'>Services</h1>
        <ul className=' ml-6 flex gap-4 justify-center mt-5'>
          <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 ' style={{
            transition: "all .3s linear"
          }}>
            <CgProfile className='text-8xl' /><span className='text-2xl'>Create Account</span>
          </li>
          <li className='font-bold p-4 rounded-md bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative top-10' style={{
            transition: "all .3s linear"
          }}>
            <BiMoneyWithdraw className='text-8xl' /><span className='text-2xl'>Withdraw & deposit</span>
          </li>
          <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95' style={{
            transition: "all .3s linear"
          }}>
            <CiBookmarkCheck className='text-8xl' /><span className='text-2xl'>Check Balance</span>
          </li>
          <li className='font-bold p-4 rounded-md  bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative top-10' style={{
            transition: "all .3s linear"
          }}>
            <CiCreditCard1 className='text-8xl' /><span className='text-2xl'>Apply Debit Card</span>
          </li>
          <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 ' style={{
            transition: "all .3s linear"
          }}>
            <SiGooglebigquery className='text-8xl' /><span className='text-2xl text-center'>Check Application Status</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Service