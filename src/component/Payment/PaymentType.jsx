import React, { useEffect, useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

const PaymentType = ({ setClose }) => {

  const closeRef = useRef();
  const navigate = useNavigate();

  const HandleClose = () => {
    setClose(false)
  }
  const HandlePayForm = (e)=>{
    e.preventDefault();
    navigate("/payment")
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


  return (
    <>
      <div className='flex justify-center h-full w-full fixed items-center mb-40 top-0 z-40 ' style={{
      background:"#8b8989bb"
    }}>
        <div className='w-full m-2 lg:w-[600px] min-h-[200px] relative border rounded-b-xl rounded-t-md border-gray-300 p-4 bg-white popup' ref={closeRef}>
          <div className='flex relative justify-center'>
            <h1 className='text-center text-xl font-medium text-sky-600'>Payment Mode:</h1>
            <CgClose className='absolute right-0 text-xl cursor-pointer' onClick={HandleClose} />
          </div>
          <form action="#" className='w-full lg:w-[580px]' onSubmit={(e)=>HandlePayForm(e)}>
            <div className=' p-2 m-2 flex gap-4 rounded-md border border-gray-200 bg-slate-50'>
              <input type="radio" className='w-40 accent-green-200' name='payment' value='debit' id='debit' />
              <label htmlFor="debit" className='font-medium text-gray-400 text-[18px]'>Debit</label>
            </div>
            <div className=' p-2 m-2 flex gap-4 rounded-md border border-gray-200 bg-slate-50'>
              <input type="radio" className='w-40 accent-green-200' name='payment' value='credit' id='credit' />
              <label htmlFor="cridit" className='font-medium text-gray-400 text-[18px]'>Credit</label>
            </div>
            <div className=' p-2 m-2 flex justify-center'>
              <button type='submit' className='text-white font-medium cursor-pointer border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-green-600'>Pay</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PaymentType