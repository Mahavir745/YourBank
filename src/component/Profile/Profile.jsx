import React, { useEffect, useRef, useState } from 'react'
import mainPage from "../../assets/assest02.jpg"
import { BsBank, BsCash, BsUnlock } from 'react-icons/bs'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaRegCreditCard } from 'react-icons/fa'
import { HiMiniCurrencyRupee } from 'react-icons/hi2'
import { CgLock, CgProfile } from 'react-icons/cg'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { BiLock, BiMenu, BiMoneyWithdraw, BiRupee } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import PaymentType from '../Payment/PaymentType'
import Pin from '../Verify/Pin'
import AtmForm from '../AtmForm/AtmForm'

const Profile = () => {

  const [outSwitch, setOutSwitch] = useState(false);
  const [withdrawTab, setWithdrawTab] = useState(false);
  const [checkbalance, setCheckBalance] = useState(false)
  const [timer, setTimer] = useState(30)
  const [balanceCheck, setBalanceCheck] = useState(false)
  const [atmTabClose,setAtmTabClose] = useState(false)
  const {setIsLogin} = useOutletContext()

  const navigate = useNavigate();
  const menuRef = useRef();

  const HandleSwitch = () => {
    setOutSwitch(state => !state)
  }

  const HandleAtmTabClose = ()=>{
    setAtmTabClose(state => !state)
  }

  const HandleLogOut = () => {
    navigate('/')
    setIsLogin(false)
  }

  useEffect(() => {
    let run;
    if (balanceCheck) {
      setBalanceCheck(true)
      run = setInterval(() => {
        if (timer > 0) {
          setTimer(state => state - 1)
        }
        else {
          clearInterval(run)
          setBalanceCheck(false)
        }
      }, 1000)
    }


    return () => {
      clearInterval(run)
    }
  }, [timer,balanceCheck])

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOutSwitch(false);
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);

    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    }

  }, [])

  const handleWithdraw = () => {
    setWithdrawTab(state => !state);
  }

  return (
    <div>
      {atmTabClose && <AtmForm setClose={setAtmTabClose}/>}
      {withdrawTab && <PaymentType setClose={setWithdrawTab} />}
      {checkbalance && <Pin setCardState={setCheckBalance} setBalanceCheck={setBalanceCheck} />}
      <div className='w-full min-h-[600px] flex items-center justify-evenly relative'>
        <div className='flex items-center justify-center absolute top-4 right-10 p-1 cursor-pointer' onClick={HandleSwitch} >
          <BiMenu className='text-4xl text-gray-700' />
        </div>
        {outSwitch &&
          <div className='flex items-center flex-col justify-center absolute top-14 right-12 bg-gray-100 w-[180px]  font-bold rounded-md cursor-pointer p-2' ref={menuRef}>
            <a className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' href='#profileService'>Services</a>
            <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={HandleAtmTabClose}>Apply for Debit Card</p>
            <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={() => { navigate("/application_status") }}>Check Status</p>
            <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={HandleLogOut}>Log Out</p>
          </div>}
        <div className='rounded-xl overflow-hidden w-[800px] h-[600px] relative flex justify-center items-center flex-col popup'>
          <BsBank className='text-8xl text-gray-600' />
          <h1 className=' z-30 text-8xl top-40 left-24 text-white font-bold'
            style={{
              backgroundImage: `url(${mainPage})`,
              backgroundPosition: "0px",
              color: "transparent",
              backgroundClip: 'text'
            }}
          ><span>Your</span><span>Bank</span></h1>
          <ul className='flex gap-4'>
            <li className='w-34 h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <AiFillSafetyCertificate className='text-8xl text-violet-500' /></li>
            <li className='w-34 h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <FaRegCreditCard className='text-8xl text-cyan-600' /></li>
            <li className='w-34 h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <HiMiniCurrencyRupee className='text-8xl text-gray-800' /></li>
            <li className='w-34 h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <CgProfile className='text-8xl text-blue-500' /></li>
          </ul>
        </div>
        <div className='w-[800px]'>
          <div className='flex flex-col p-4  gap-2'>
            <p className='text-xl font-medium text-sky-900'>Avl Balance:</p>
            <p className='tracking-widest font-medium text-gray-500 text-4xl flex items-center gap-0 pl-10'>{balanceCheck ? <BiRupee className='text-xl' /> : <CgLock className='text-xl' />} <span className='text-[28px] text-green-500 font-bold'>{balanceCheck ? "100000":<span className='text-[12px] tracking-normal pl-4 text-red-500'> Unlock! Verify first using 4 digit PIN</span>}</span> <span className='text-[18px] font-bold text-blue-500 pl-10'>{balanceCheck && `${timer}s`}</span> </p>
          </div>
          <div className='flex flex-col p-4 gap-1'>
            <p className='text-xl font-medium text-sky-900'>Account Holder Name:</p>
            <p className='tracking-widest font-medium text-gray-500 text-2xl pl-10'>Mahavir Kumar Mahato</p>
          </div>
          <div className='flex p-4 flex-col gap-1'>
            <p className='text-xl font-medium text-sky-900'>Account No.</p>
            <p className='text-6xl text-gray-400 tracking-widest font-medium pl-10'>123456789012</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='relative'>
              <MdOutlineSecurity className='text-[140px] text-gray-600' />
            </div>
            <p className='text-sky-900 font-bold text-xl w-[70%]'>Your privacy is important to us. We respect your personal information and are committed to protecting it. We do not share your data with third parties without your consent. For more details, please review our privacy policy.</p>
          </div>
        </div>
      </div>

      <div className='' id='profileService'>
        <div className=' w-full min-h-[500px] m-auto p-4 mt-14'>
          <h1 className='text-4xl text-gray-600 text-center font-bold w-full mb-20'>Services</h1>
          <ul className=' ml-6 flex gap-4 justify-center mt-5'>
            <li className='font-bold p-4 rounded-md bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative top-10' style={{
              transition: "all .3s linear"

            }} onClick={handleWithdraw}>
              <BiMoneyWithdraw className='text-8xl' /><span className='text-2xl'>Withdraw & Deposit</span>
            </li>
            <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95' style={{
              transition: "all .3s linear"
            }} onClick={() => { setCheckBalance(state => !state) }}>
              <CiBookmarkCheck className='text-8xl' /><span className='text-2xl'>Check Balance</span>
            </li>
            <li className='font-bold p-4 rounded-md  bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative top-10' style={{
              transition: "all .3s linear"
            }} onClick={HandleAtmTabClose}>
              <CiCreditCard1 className='text-8xl' /><span className='text-2xl'>Apply Debit Card</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile