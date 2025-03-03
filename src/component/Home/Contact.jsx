import React from 'react'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='flex w-full lg:pl-4 flex-col lg:flex-row justify-around items-center lg:items-center xl:items-start xl:justify-center sm:gap-20 sm:mt-20 md:mt-2'>
      <div className='xl:w-[50%] flex flex-col  sm:flex-row min-h-[500px] items-center justify-center gap-10 relative mt-40'>
        <div className=' w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] flex justify-center items-center flex-shrink-0 rounded-2xl bg-white rotate-45 z-10 shadow-xl'>
          <h1 className=' text-5xl sm:text-8xl top-40 left-24 text-white font-bold -rotate-45 lg:text-6xl xl:text-9xl'
            style={{
              backgroundImage: `url(${mainPage})`,
              backgroundPosition: "0px",
              color: "transparent",
              backgroundClip: 'text'
            }}
          ><span>Your</span><span>Bank</span></h1>
        </div>
        <div className=' w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] flex-shrink-0 flex justify-center items-center rounded-2xl bg-gray-200 rotate-45'>
          <BsBank className='text-4xl sm:text-8xl text-gray-600 -rotate-45' />
        </div>
      </div>
      <form className='w-full sm:w-[500px] m-auto mt-8 mb-8 rounded sm:shadow-xl p-2' action="https://formspree.io/f/xayrrwoj" target='_blank' method='POST'>
        <h1 className='text-2xl p-2 text-center text-white bg-blue-900'>Query</h1>
        <div className=' h-[106px] pl-6 mt-2'>
          <label htmlFor="username" className='block text-gray-600 font-medium'>Name: </label>
          <input type="text" id='username' placeholder='enter your name' name='username' className='border border-sky-200 w-[90%] h-[60px] rounded pl-6 mt-2 text-gray-700 focus:outline-emerald-600 ' />
        </div>
        <div className=' h-[106px] pl-6 mt-2'>
          <label htmlFor="email" className='block text-gray-600 font-medium'>Email: </label>
          <input type="email" id='email' placeholder='eg: abc123@gmail.com' name='email' className='border border-sky-200 w-[90%] h-[60px] rounded pl-6 mt-2 text-gray-700 focus:outline-emerald-600 ' />
        </div>
        <div className=' h-[206px] pl-6 mt-2'>
          <label htmlFor="feedback" className='block text-gray-600 font-medium'>Your Query:</label>
          <textarea id='feedback' name='feedback' placeholder='Feel free :) ' cols={30} rows={5} className='w-[90%] border resize-none border-sky-200 pl-6 mt-2 pt-2 rounded text-gray-700 focus:outline-emerald-600'></textarea>
        </div>
        <div className='border h-[106px] flex flex-col items-center p-2 bg-gray-600 text-white'>
          <button type='submit' className='bg-blue-900 text-white rounded pl-12 pr-12 pt-4 pb-4 w-full sm:w-[440px] focus:scale-95 hover:bg-teal-500'> Submit </button>
          <p className='text-center mt-2'>Your queries are end-to-end encrypted.</p>
        </div>

        <p className=' p-4'>
          <span className='text-red-700 font-semibold'>Note:</span> All information is private. Please keep it confidential. For inquiries, use the form. <br />Thank you.<br /><span className='text-blue-600 font-bold'>Managed by Mahavir745.</span></p>
      </form>
    </div>
  )
}

export default Contact