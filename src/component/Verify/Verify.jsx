import React, { useContext, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { handleAccountData } from '../Store/AccounDataStore'

const Verify = ({setCardState}) => {
  const [eyehide2, setEyeHide2] = useState(true)
  const navigate = useNavigate()
  const {foundUser} = useContext(handleAccountData);

  const registerNo = useRef();
  const password = useRef();
  const userPhoneNo = foundUser[0]?.contact;
  const userPassword = foundUser[0]?.password;


  const HandleCutOption = ()=>{
    setCardState(false)
  }

  const HandleVerifyBtn = (e)=>{
    e.preventDefault();
    

    if(registerNo.current.value === userPhoneNo && password.current.value === userPassword){
      navigate("/card")
    }
  }

  return (
    <div className='flex justify-center items-center z-40 h-full mb-40 mt-20 fixed top-0 w-full' style={{
      background:"#8b8989bb"
    }}>
      <div className='w-full m-2 lg:w-[600px] h-[340px] bg-white relative border rounded-b-xl rounded-t-md border-gray-300 p-4 popup'>
        <div className='flex justify-center items-center'>
          <h1 className='text-center text-xl font-medium text-blue-600'>Verify</h1>
          <CgClose className='absolute right-4 text-xl cursor-pointer' onClick={HandleCutOption}/>
        </div>
        <form action="#" className='w-full lg:w-[580px] ' onSubmit={(e)=>HandleVerifyBtn(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="accountHolder" className='font-medium text-gray-600'>Registered Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type="number" className=' focus:outline-0 pl-4 text-[16px] text-gray-500 text-2xl tracking-[4px] w-full' placeholder='Phone Number' id='accountHolder' ref={registerNo}/>
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="password" className='font-medium text-gray-600'>Password: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type={eyehide2 ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] w-[80%] text-gray-500' placeholder='password' id='password' ref={password}/>
              {eyehide2 ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide2(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide2(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600' >Verify</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Verify