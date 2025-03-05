import React, { useContext, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RiRestartLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'
import { handleAccountData } from '../Store/AccounDataStore'

const CreateAccount = () => {

  const [eyehide, setEyeHide] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.outerWidth)
  const navigate = useNavigate();
  const {addNewAccount} = useContext(handleAccountData)
  
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const gurdianName = useRef();
  const email = useRef();
  const contactNo = useRef();
  const aadharNo = useRef();
  const createPassword = useRef();
  const confirmPassword = useRef();
  const state = useRef();
  const city = useRef();
  const area = useRef();
  const pincode = useRef();
  const captcha = useRef();

  const findCaptchaValue = Math.floor(Math.random()*(99999 - 10000) + 10000);


  const HandleCreateFrom = (e) => {
    e.preventDefault();
    navigate("/login")

    const fullName = {
      firstName:firstName.current.value,
      middleName:middleName.current.value,
      lastName: lastName.current.value
    }
    const gurdian = gurdianName.current.value;
    const emailId = email.current.value;
    const contact = contactNo.current.value;
    const aadhar = aadharNo.current.value;
    const createPass = createPassword.current.value;
    const confirmPass = confirmPassword.current.value;
    const address = {
      state: state.current.value,
      city: state.current.value,
      area: area.current.value,
      pincode:pincode.current.value,
    }
    const captchaValue = captcha.current.value;
    const newAccountId = `${Date.now()}YourBank`;
    const accountCode = "2707"
    const accountNo = Math.floor(Math.random()*(99999999 - 10000000) + 100000000)
    const atmNo1 = 2707
    const atmNo2 = Math.floor(Math.random()*(9999 - 1000) + 1000);
    const atmNo3 = Math.floor(Math.random()*(9999 - 1000) + 1000);
    const expYear = Math.floor(Math.random()*(38 - 26) + 26);
    const cvv = Math.floor(Math.random()*(999 - 100) + 100);
    const atmPin = Math.floor(Math.random()*(9999 - 1000) + 1000);

    

    const details = {
      fullName,
      gurdian,
      emailId,
      contact,
      aadhar,
      password: createPass,
      address,
      captchaValue,
      newAccountId,
      accountNo: accountCode + accountNo,
      findCaptchaValue,
      atm:false,
      amount: "",
      atmPin: atmPin,
      cvv: cvv,
      atmNo:`${atmNo2}-${atmNo1}-${atmNo3}`,
      exp:`1/${expYear}`
    }

    addNewAccount(details);


  }

  return (
    <div className='flex md:flex-col lg:flex-row justify-around items-center lg:items-start h-full min-h-[900px] pb-40 pt-20  bg-contain'>
      {screenWidth > 480 && <div className='w-[100%] lg:w-[50%] flex  h-[500px] items-center justify-center gap-10 fixed mt-20 left-0'>
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
      </div>}
      <div className=' w-[300px] m-2 sm:w-[700px] relative border rounded-b-xl rounded-t-md border-gray-300 p-2 sm:p-4 bg-white lg:ml-[100px] xl:ml-[600px]'>
        <div>
          <h1 className='text-center text-xl font-medium text-blue-600'>Create Account</h1>
        </div>
        <form action="#" className=' w-full lg:w-[580px]' onSubmit={(e) => HandleCreateFrom(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="costumerName" className='font-medium text-gray-600'>Full Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2'>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='First name' id='costumerName' ref={firstName}/>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Middle name' ref={middleName}/>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Last name' ref={lastName}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="gurdian" className='font-medium text-gray-600'>Gurdian Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='Parent name' id='gurdian' ref={gurdianName}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="emailId" className='font-medium text-gray-600'>Email: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="email" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='abc@gmail.com' id='emailId' ref={email}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="contactNo" className='font-medium text-gray-600'>Contact Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="Number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='1234576890' id='contactNo' ref={contactNo}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="aadhar" className='font-medium text-gray-600'>Aadhar Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2' >
              <input type="Number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-full' placeholder='1234-1234-1234' id='aadhar' ref={aadharNo}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="password" className='font-medium text-gray-600'>Create Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 mt-2 items-center border rounded-sm h-10 w-[260px] sm:w-[300px] sm:pr-2 border-gray-300'>
              <input type={eyehide ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] text-gray-500 w-[220px] sm:w-full' placeholder='password' id='password' ref={createPassword}/>
              {eyehide ? <BsEyeSlash className='text-blue-600 text-[18px] ' onClick={() => setEyeHide(state => !state)} /> : <BsEye className='text-blue-600 text-[18px] ' onClick={() => setEyeHide(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="Confirmpassword" className='font-medium text-gray-600'>Confirm Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 '>
              <input type="password" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 w-[300px]' placeholder='confirm password' id='Confirmpassword' ref={confirmPassword}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="Address" className='font-medium text-gray-600'>Address: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2'>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='State' id='Address' ref={state}/>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='City' ref={city}/>
              <input type="text" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Area' ref={area}/>
              <input type="number" className='border rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Pincode' ref={pincode}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="captcha" className='font-medium text-gray-600'>Enter the Captcha <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center'>
              <input type="text" className='border w-24 rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500 line-through tracking-widest font-bold bg-gray-900' placeholder='AZQ231' value={findCaptchaValue} disabled/>
              <input type="text" className='border w-40 text-center rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Captcha' id='captcha' ref={captcha}/>
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