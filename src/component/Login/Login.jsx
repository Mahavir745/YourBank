import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'
import { handleAccountData } from '../Store/AccounDataStore'
import { GiFountain } from 'react-icons/gi'

const Login = () => {
  const [eyehide, setEyeHide] = useState(true)
  const navigate = useNavigate();
  const { setIsLogin } = useOutletContext();
  const [screenWidth, setScreenWidth] = useState(window.outerWidth)
  // const {totalAccount} = useContext(handleAccountData)
  const emailContact = useRef();
  const password = useRef();
  const { addLoginAccount, setFoundUser, totalAccount } = useContext(handleAccountData);

  // const loginData = JSON.parse(localStorage.getItem("login")) || {}

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailContact.current.value;
    const AcPassword = password.current.value;
    const loginData = { email, AcPassword }
    addLoginAccount(loginData);

    let data = totalAccount.filter((acc) => {
      if ((acc.emailId === loginData.email || acc.contact === loginData.email) && acc.password === loginData.AcPassword) {
        return acc
      }
    })
    
    if (data.length > 0) {
      navigate("/profile")
      setIsLogin(true)
      setFoundUser(data)
    }

  }



  return (
    <div className='flex justify-center md:flex-col md:items-center lg:items-start lg:flex-row h-full min-h-[300px] mb-40 mt-20'>
      <div className='w-full m-2 md:w-[600px] h-[380px] relative border rounded-b-xl rounded-t-md border-gray-300 bg-white p-4'>
        <div>
          <h1 className='text-center text-xl font-medium text-blue-600'>Login Account</h1>
        </div>
        <form action="#" className='w-full md:w-[580px]' onSubmit={(e) => handleSubmit(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="loginaccount" className='font-medium text-gray-600'>Email/Contact No: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='Enter your email/contact no.' id='loginaccount' ref={emailContact} />
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="password" className='font-medium text-gray-600'>Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type={eyehide ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] text-gray-500 w-[200px] sm:w-full' placeholder='password' id='password' ref={password} />
              {eyehide ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600'>Login</button>
          </div>
          <div className=' p-2 m-2 flex justify-center gap-2'>
            <p className='text-gray-500 font-medium'>Don't have an account</p>
            <Link to="/createAccount" className='text-sky-400 underline '>create</Link>
          </div>
        </form>
      </div>
      {screenWidth > 480 && <div className='w-[50%] flex  h-[500px] items-center justify-center gap-10 md:fixed md:bottom-0 md:-z-20 lg:relative'>
        <div className=' w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] flex justify-center items-center flex-shrink-0 rounded-2xl bg-white rotate-45 z-10 shadow-xl'>
          <h1 className=' text-8xl lg:text-6xl top-40 left-24 text-white font-bold -rotate-45 z-20'
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
      </div>}
    </div>
  )
}

export default Login