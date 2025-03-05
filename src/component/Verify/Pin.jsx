import React, { useEffect, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import Notification from '../Notification/Notification'

const Pin = ({ setCardState, setBalanceCheck,atmPin,setAtmTab }) => {
  const [eyehide2, setEyeHide2] = useState(true)
  const menuRef = useRef();
  const verifyPin = useRef();


  const HandleCutOption = () => {
    setCardState(false)
  }

  const HandleVerifyBtn = (e) => {
    e.preventDefault();
    setCardState(false)

    if(atmPin === verifyPin.current.value){
      setBalanceCheck(true)
    }
    else{
      alert("PIN INCORRECT! TRY AGAIN")
    }

  }

  const HandleAtmTab = ()=>{
    setAtmTab(true)
    setCardState(false);
  }

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setCardState(false)
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);

    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    }

  }, [])


  return (
    <div className='flex justify-center items-center z-40 h-full mb-40 fixed top-0 w-full' style={{
      background: "#8b8989bb"
    }}>
      <div className=' w-full lg:w-[600px] m-2 h-[240px] bg-white relative border rounded-b-xl rounded-t-md border-gray-300 p-4 popup' ref={menuRef}>
        <div className='flex justify-center items-center'>
          <h1 className='text-center text-xl font-medium text-blue-600'>Verify</h1>
          <CgClose className='absolute right-4 text-xl cursor-pointer' onClick={HandleCutOption} />
        </div>
        <form action="#" className='w-full lg:w-[580px] ' onSubmit={(e) => HandleVerifyBtn(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="password" className='font-medium text-gray-600'>PIN: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type={eyehide2 ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px]  w-[90%] text-gray-500' placeholder='password' id='password' ref={verifyPin}/>
              {eyehide2 ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide2(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide2(state => !state)} />}
            </div>
            <p className='text-blue-500 font-medium'>If you don't have PIN. <span className='text-red-600 underline text-[14px] cursor-pointer' onClick={HandleAtmTab}>Apply ATM Card</span></p>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600' >Verify</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Pin