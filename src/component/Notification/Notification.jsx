import React, { useState } from 'react'
import { BiCheckCircle, BiCross } from 'react-icons/bi'

const Notification = () => {

  const [popup, setPopup] = useState(true)
  const levelMeasurement = 30

  return (
    <div className='flex justify-center flex-col items-center h-full min-h-[40px]'>
      <div className={`w-[600px] relative border min-h-[40px] ${popup ? "bg-green-500" : "bg-red-500"} rounded-md border-gray-300 p-2`}>
        <div className='flex gap-6 items-center'>
          {popup ? <BiCheckCircle className='text-4xl text-white' /> : <BiCross className='rotate-45 text-4xl text-white' />}
          <h1 className='text-center text-2xl font-medium text-white'>{popup ? "Confimation" : "Try Again!"}</h1>
        </div>
      </div>
    </div>
  )
}

export default Notification