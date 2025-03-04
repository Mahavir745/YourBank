import React, { useEffect, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { RiRestartLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const AtmForm = ({setClose}) => {

  const [eyehide, setEyeHide] = useState(true)
  const navigate = useNavigate();
  const atmref = useRef();

  const HandleApplyform = (e) => {
    e.preventDefault();
    navigate("/application_status")
  }

  const HandleClose = () => {
    setClose(false)
  }

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (atmref.current && !atmref.current.contains(event.target)) {
        setClose(false);
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);

    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    }

  }, [])

  return (
    <div className='flex justify-center w-full h-full items-center z-40 fixed top-0'
      style={{
        background: "#8b8989bb"
      }}>
      <div className='w-full lg:w-[600px] absolute m-2 border rounded-b-xl sm:h-auto sm:p-4 h-[300px] overflow-y-scroll sm:overflow-hidden overFlowScroll bg-white rounded-t-md border-gray-300 popup' ref={atmref}>
        <div className='sticky top-0 bg-gray-200 sm:bg-transparent items-center flex justify-center'>
          <h1 className='text-center text-xl font-medium text-blue-600'>Apply ATM</h1>
          <CgClose className='absolute right-2 text-xl cursor-pointer' onClick={HandleClose} />
        </div>
        <form action="#" className='w-[300px] sm:w-full lg:w-[580px]' onSubmit={(e) => HandleApplyform(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="loginaccount" className='font-medium text-gray-600'>Email/Contact No: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='Enter your email/contact no.' id='loginaccount' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="accountHolder" className='font-medium text-gray-600'>Account Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2  mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type={eyehide ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Account No.' id='accountHolder' />
              {eyehide ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="accountHolderName" className='font-medium text-gray-600'>Account Holder Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type="text" className=' focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Enter your name' id='accountHolderName' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="captcha" className='font-medium text-gray-600'>Enter the Captcha <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center'>
              <input type="text" className='border w-24 rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='AZQ231' />
              <input type="text" className='border w-40 text-center rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Captcha' id='captcha' />
              <RiRestartLine className='text-blue-500 text-[20px]' />
            </div>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600'>Apply</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AtmForm