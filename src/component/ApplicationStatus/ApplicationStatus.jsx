import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import mainPage from "../../assets/assest02.jpg"
import { BsBank } from 'react-icons/bs'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaRegCreditCard } from 'react-icons/fa'
import { HiMiniCurrencyRupee } from 'react-icons/hi2'
import { CgProfile } from 'react-icons/cg'
import Verify from '../Verify/Verify'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { handleAccountData } from '../Store/AccounDataStore'

const ApplicationStatus = () => {

  const [timer, setTimer] = useState(30)
  const [progress, serProgress] = useState(0)
  const [cardState, setCardState] = useState(false)
  const [tabs, setTabs] = useState(false);
  const navigate = useNavigate();
  const tabRef = useRef();
  const { setIsLogin } = useOutletContext()
  // let { foundUser, updateAtmStatus, totalAccount,setFoundUser } = useContext(handleAccountData);

  // data
  // const refId = foundUser[0]?.newAccountId;
  // console.log(refId)

  useEffect(() => {
    let run;

    if (timer > 0) {
      run = setInterval(() => {
        setTimer(state => state - 1);
        serProgress(state => state + 1)
      }, 1000)
    }
    else {
      clearInterval(run)
      // updateAtmStatus(refId)
    }

    return () => {
      clearInterval(run)
    }
  }, [timer])

  const levelMeasurement = (100 / 30) * progress

  const HandleDownloadBtn = () => {
    // const updatedUser = totalAccount.map(ac => {
    //   if (ac.newAccountId === refId) {
    //     return { ...foundUser[0], atm: ac.atm };
    //   }
    //   return ac;
    // });

    // setFoundUser(updatedUser)
    setCardState(true)
  }

  const HandleLogOUt = () => {
    setIsLogin(false)
    navigate("/")
    // localStorage.setItem("isLogin",false);

  }

  useEffect(() => {
    const HanldeTab = (event) => {
      if (tabRef.current && !tabRef.current.contains(event.target)) {
        setTabs(false)
      }
    }
    document.addEventListener("mousedown", HanldeTab);

    return () => {
      document.removeEventListener("mousedown", HanldeTab)
    }
  }, [])


  return (
    <div className='w-full flex justify-center flex-wrap relative h-full min-h-[300px] mb-40 mt-20'>
      <div className='flex items-center justify-center absolute bg-white -top-10 right-10 p-1 cursor-pointer z-30' onClick={() => {
        setTabs(state => !state)
      }} >
        <BiMenu className='text-4xl text-gray-700 cursor-pointer z-20' />
      </div>
      {tabs && <div className='flex items-center flex-col justify-center absolute z-40 top-0 right-12 bg-gray-100 w-[180px] font-bold rounded-md cursor-pointer p-2' ref={tabRef}>
        <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={() => { navigate("/profile") }}>Profile</p>
        <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={HandleLogOUt}>Log Out</p>
      </div>}
      <div className='rounded-xl overflow-hidden w-[800px] h-[500px] relative flex justify-center items-center flex-col'>
        <BsBank className='text-8xl text-gray-600' />
        <h1 className=' z-40 text-6xl lg:text-8xl top-40 left-24 text-white font-bold'
          style={{
            backgroundImage: `url(${mainPage})`,
            backgroundPosition: "0px",
            color: "transparent",
            backgroundClip: 'text'
          }}
        ><span>Your</span><span>Bank</span></h1>
        <ul className='flex gap-4'>
          <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition: "all .3s linear"
          }}>
            <AiFillSafetyCertificate className='text-4xl lg:text-8xl text-violet-500' /></li>
          <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition: "all .3s linear"
          }}>
            <FaRegCreditCard className='text-4xl lg:text-8xl text-cyan-600' /></li>
          <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
            transition: "all .3s linear"
          }}>
            <HiMiniCurrencyRupee className='text-4xl lg:text-8xl text-gray-800' /></li>
          <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
            transition: "all .3s linear"
          }}>
            <CgProfile className='text-4xl lg:text-8xl text-blue-500' /></li>
        </ul>
      </div>
      {cardState && <Verify setCardState={setCardState} />}
      <div className='w-full lg:w-[600px] relative rounded-b-xl rounded-t-md border-0 md:border md:border-gray-300 bg-white p-4'>
        <div>
          <h1 className='text-center text-xl font-medium text-blue-600'>Application Status for Debit Card</h1>
        </div>
        <div className='w-full lg:w-[580px] flex flex-col'>
          <div className=' p-2 m-2 flex w-full justify-around items-center'>
            <div className='border-0 w-28 h-28 rounded-full md:border md:border-gray-300 flex justify-center items-center'>
              <BsFillCheckCircleFill className='text-5xl text-green-500 border rounded-full p-2' />
            </div>
            <div className='h-28 w-[400px] flex flex-col justify-center relative'>
              <div className=' text-center text-gray-900 font-medium md:text-2xl'>12341@yourBank</div>
              <div className='mt-4 text-center absolute top-[160px] right-[160px] text-[48px] md:text-[72px] text-gray-400'>{timer} s</div>
            </div>
          </div>
          <div className='w-[8px] h-[220px] border border-slate-200 rounded-xl relative left-12 sm:left-30 lg:left-20 '>
            <div className={`bg-green-400 absolute w-full border border-green-400`}
              style={{
                height: `${levelMeasurement}%`,
                transition: 'height .4s linear',
              }}
            ></div>
          </div>
          <div className=' p-2 m-2 flex w-full justify-around items-center'>
            <div className='border-0 w-28 h-28 rounded-full md:border lg:border-gray-300 flex items-center justify-center'>
              <BsFillCheckCircleFill className={`text-5xl border rounded-full p-2 ${progress === 30 ? "text-green-500" : "text-gray-400"}`} />
            </div>
            <div className='h-28 w-[400px] flex flex-col justify-center'>
              <div className={`mt-4 text-center ${progress === 30 ? "text-green-500" : "text-red-500"} text-xl font-medium`}>{progress === 30 ? "Debit Card Generated Successfully" : " wait generating....."}</div>
            </div>
          </div>
          <div className=' p-2 m-2 flex justify-center'>
            <button onClick={HandleDownloadBtn} className={`${progress === 30 ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"} text-white font-medium border-sky-500 border pl-8 pr-8 p-2 rounded-md bg-sky-600 `} disabled={progress !== 30} >View Debit Card</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationStatus