import React, { useEffect, useRef, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { RiRestartLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Notification from '../Notification/Notification'
import QRCode from 'react-qr-code'
import { FaRupeeSign } from 'react-icons/fa'

const PaymentMode = () => {

  const [eyehide, setEyeHide] = useState(true)
  const [timer, setTimer] = useState(10);
  const [tiggerTimer, setTiggerTimer] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(false)
  const [timer2, setTimer2] = useState(5)
  const levelMeasurement = 100 / timer2;

  const closeRef = useRef();
  const HandleClose = () => {
    setTiggerTimer(true)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    setProgress(true)
  }

  useEffect(() => {
    const handleclosebtn = (event) => {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        setClose(false);
      }
    }

    document.addEventListener("mousedown", handleclosebtn);

    return () => {
      document.removeEventListener("mousedown", handleclosebtn)
    }
  })

  useEffect(() => {
    let run;
    if (tiggerTimer) {
      run = setInterval(() => {
        if (timer > 0) {
          setTimer(state => state - 1);
        }
        else {
          navigate("/profile")
          clearInterval(run)
        }
      }, 1000)
    }
    return () => {
      clearInterval(run)
    }
  }, [timer, tiggerTimer])

  useEffect(() => {
    let run;
    if (progress) {
      run = setInterval(() => {
        if (timer2 > 0) {
          setTimer2(state => state - 1);
        }
        else {
          clearInterval(run)
        }
      }, 1000)
    }
    return () => {
      clearInterval(run)
    }
  }, [timer2, progress])


  return (
    <div className='flex justify-center h-full w-full mb-40 mt-20  z-50 items-center gap-20'>
      <div className='w-[600px] min-h-[300px] relative border rounded-b-xl rounded-t-md border-gray-300 p-4 bg-white' ref={closeRef}>
        <div className='flex relative justify-center'>
          <h1 className='text-center text-xl font-medium text-blue-600'>Payment By Debit/Credit</h1>
          <CgClose className='absolute right-0 text-xl cursor-pointer' onClick={HandleClose} />
        </div>
        <form action="#" className={`w-[580px] ${tiggerTimer && "cursor-not-allowed"}`} onSubmit={(e) => HandleSubmit(e)}>
          <div className=' p-2 m-2'>
            <label htmlFor="accountHolder" className='font-medium text-gray-600'>Card Number: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type={eyehide ? "password" : "text"} className=' focus:outline-0 pl-4 text-[16px] text-gray-500 text-2xl tracking-[4px]' placeholder='XXXXXXXXXXXX' id='accountHolder' disabled={tiggerTimer} />
              {eyehide ? <BsEyeSlash className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} /> : <BsEye className='text-blue-600 text-[18px]' onClick={() => setEyeHide(state => !state)} />}
            </div>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="accountHolderName" className='font-medium text-gray-600'>Account Holder Name: <span className='text-red-700'>*</span></label>
            <div className='flex gap-2 flex-wrap mt-2 items-center border rounded-sm h-10 w-full border-gray-300 justify-between pr-2'>
              <input type="text" className=' focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Enter your name' id='accountHolderName' disabled={tiggerTimer} />
            </div>
          </div>
          <div className='flex'>
            <div className=' p-2 m-2'>
              <label htmlFor="exp" className='font-medium text-gray-600'>Exp. <span className='text-red-700'>*</span></label>
              <div className='flex gap-2 flex-wrap mt-2 items-center'>
                <input type="text" className='border w-24 rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='6/28' disabled={tiggerTimer} id='exp' />
              </div>
            </div>
            <div className=' p-2 m-2'>
              <label htmlFor="cvv" className='font-medium text-gray-600'>Cvv <span className='text-red-700'>*</span></label>
              <div className='flex gap-2 flex-wrap mt-2 items-center'>
                <input type="password" className='border w-24 rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='cvv' disabled={tiggerTimer} id='cvv' />
              </div>
            </div>
            <div className=' p-2 m-2'>
              <label htmlFor="Amount" className='font-medium text-gray-600'>Amount <span className='text-red-700'>*</span></label>
              <div className='flex gap-2 flex-wrap mt-2 items-center'>
                <input type="number" className='border w-48 rounded-sm h-10 border-gray-300 focus:outline-0 pl-4 text-[16px] text-gray-500' placeholder='Amount' disabled={tiggerTimer} id='amount' />
              </div>
            </div>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-green-600' disabled={tiggerTimer}>Confirm</button>
          </div>
        </form>
        <div className='flex justify-center items-center font-bold text-gray-600'>
          {tiggerTimer && <p>Wait <span className='text-blue-600 text-xl'>{timer}s</span></p>}
        </div>

        {/* progress bar  */}

        {progress && <div className='w-full h-2 border border-slate-200 rounded-xl relative'>
          <div className=" h-full bg-green-500" style={{
            width: `${levelMeasurement}%`,
            transition: "width .6s linear"
          }}>
          </div>
        </div>}

      </div>

      {/* payment recipts */}
      {timer2 === 0 && <div className='border w-[500px] min-h-[400px] border-gray-300 rounded-xl p-4 '>
        <div>
          <h1 className='text-xl font-bold text-center underline'>Payment Recipt</h1>
        </div>
        <div className='pl-4 pt-2'>
          <p className='text-[14px] text-gray-400 font-medium'>Account No:</p>
          <p className='text-xl pl-6 text-gray-900 font-medium' >123456789011</p>
        </div>
        <div className='pl-4 pt-2'>
          <p className='text-[14px] text-gray-400 font-medium'>Transition Id</p>
          <p className='text-xl pl-6 text-gray-900 font-medium' >123456789016378</p>
        </div>
        <div className='pl-4 pt-2'>
          <p className='text-[14px] text-gray-400 font-medium'>Deposite Amount:</p>
          <p className='text-4xl mt-4 text-gray-900 font-medium flex gap-2 justify-center items-center' ><FaRupeeSign /> 10000</p>
        </div>
        <div className='flex items-center justify-between p-4'>
          <QRCode
            value='1000'
            size={118}
          />
          <h1 className='text-2xl font-bold '>Debited</h1>
        </div>

      </div>}
    </div>
  )
}

export default PaymentMode