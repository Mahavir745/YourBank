import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RiRestartLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'

const CreateAccount = () => {

  const [eyehide, setEyeHide] = useState(true)
  const navigate = useNavigate();
  const HandleCreateFrom = (e)=>{
    e.preventDefault();
    navigate("/login")
  }

  return (
    <div className='flex justify-around h-full min-h-[900px] pb-40 pt-20  bg-contain'>
      <div className='w-[50%] flex  h-[500px] items-center justify-center gap-10 fixed mt-20 left-0'>
        <div className=' w-[400px] h-[400px] flex justify-center items-center flex-shrink-0 rounded-2xl bg-white rotate-45 z-10 shadow-xl'>
          <h1 className=' text-8xl top-40 left-24 text-white font-bold -rotate-45 z-20'
            style={{
              backgroundImage: `url(${mainPage})`,
              backgroundPosition: "0px",
              color: "transparent",
              backgroundClip: 'text'
            }}
          ><span>Your</span><span>Bank</span></h1>
        </div>
        <div className=' w-[200px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-2xl bg-gray-200 rotate-45'>
          <BsBank className='text-8xl text-gray-600 -rotate-45' />
        </div>
      </div>
      <div className='w-[600px] relative border rounded-b-xl rounded-t-md border-gray-300 p-4 bg-white ml-[500px]'>
        <div>
          <h1 className='text-center text-xl font-medium text-blue-600'>Create Account</h1>
        </div>
        <form action="#" className='w-[580px]' onSubmit={(e)=> HandleCreateFrom(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="costumerName" className='font-medium text-gray-600'>Full Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2'>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='First name' id='costumerName' />
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Middle name' />
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Last name' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="gurdian" className='font-medium text-gray-600'>Gurdian Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='Parent name' id='gurdian' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="emailId" className='font-medium text-gray-600'>Email: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="email" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='abc@gmail.com' id='emailId' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="contactNo" className='font-medium text-gray-600'>Contact Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="Number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='1234576890' id='contactNo' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="aadhar" className='font-medium text-gray-600'>Aadhar Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="Number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='1234-1234-1234' id='aadhar' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="password" className='font-medium text-gray-600'>Create Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-[300px] border-gray-300'>
              <input type={eyehide ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='password' id='password' />
              {eyehide ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="Confirmpassword" className='font-medium text-gray-600'>Confirm Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 '>
              <input type="password" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-[300px]' placeholder='confirm password' id='Confirmpassword' />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="Address" className='font-medium text-gray-600'>Address: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2'>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='State' id='Address' />
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='City' />
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Area' />
              <input type="number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Pincode' />
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
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600'>Create</button>
          </div>
          <div className=' p-2 m-2 flex justify-center gap-2'>
            <p className='text-gray-500 font-medium'>Already have an account</p>
            <Link to="/login" className='text-sky-400 underline '>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount