import { AiFillSafetyCertificate } from "react-icons/ai"
import { BsBank, BsCashCoin, BsMenuButton } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { FaRegCreditCard } from "react-icons/fa"
import { HiMiniCurrencyRupee } from "react-icons/hi2"
import mainPage from "../../assets/assest02.jpg"
import QRCode from "react-qr-code"
import { BiMenu, BiMoneyWithdraw } from "react-icons/bi"
import { CiBookmarkCheck, CiCreditCard1 } from "react-icons/ci"
import { MdSecurity } from "react-icons/md";
import { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

const Card = () => {

  const [tabs, setTabs] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const {setIsLogin} = useOutletContext()

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setTabs(false);
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);

    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    }

  }, [])

  const HandleLogOut = ()=>{
    setIsLogin(false)
    navigate("/")
  }

  return (
    <>
      <div className='flex flex-wrap-reverse justify-center gap-4 h-full items-center relative  top-0 w-full '>
        <div className='flex items-center justify-center absolute bg-white top-4 right-10 p-1 cursor-pointer border rounded-md'>
          <BiMenu className='text-4xl text-gray-700 cursor-pointer z-20' onClick={()=>{
            setTabs(state => !state)
          }}/>
        </div>
      { tabs && <div className='flex items-center flex-col justify-center absolute z-40 top-14 right-12 bg-gray-100 w-[180px] font-bold rounded-md cursor-pointer p-2' ref={menuRef}>
          <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={()=>{navigate("/profile")}}>Profile</p>
          <p className='text-gray-700 p-2 hover:bg-sky-200 w-full text-center rounded-md' onClick={HandleLogOut}>Log Out</p>
        </div>}
        <div className=' m-2 w-[500px] min-h-[280px] relative border rounded-xl border-gray-300 p-4 flex flex-col justify-center bg-gradient-to-bl to-sky-400 from-slate-200 popup'>
          <div className=' p-2 m-2'>
            <p className='font-medium text-gray-600 flex gap-4 text-4xl tracking-widest'>
              <span>1234</span><span>1234</span><span>1234</span>
            </p>
          </div>
          <div className=' p-2 m-2'>
            <p className='font-medium text-gray-600 tracking-widest text-xl'>MAHAVIR KUMAR MAHATO</p>
          </div>
          <div className=' p-2 m-2'>
            <label htmlFor="exp" className="font-medium text-gray-600">Exp.</label>
            <p className='font-medium text-gray-600' id="exp">6/32</p>
          </div>
        </div>
        <div className='w-[500px] m-2 min-h-[280px] relative border rounded-xl border-gray-300 p-4 flex flex-col justify-center bg-gradient-to-bl to-sky-200 from-slate-50 popup'>
          <div className=' p-2 m-2 rounded-md'>
            <p className='font-medium text-gray-600 flex justify-end bg-slate-950 gap-4 text-xl tracking-widest p-2'>
              <span className="text-white">234</span>
            </p>
          </div>
          <div className=' p-2 m-2 flex justify-between'>
            <QRCode
              value="Account Details"
              size={114}
            />
            <p className="text-[10px]">
              We provide you Debit card.<br />Managed by<br /> <span className="text-[8px] font-medium"> Mahavir745</span><br /><span className="text-xl font-bold">YOUR BANK</span>
            </p>
          </div>
        </div>
        <div className='rounded-xl overflow-hidden w-[800px] h-[400px] relative flex justify-center items-center flex-col'>
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
              <AiFillSafetyCertificate className='text-8xl text-violet-500' /></li>
            <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <FaRegCreditCard className='text-8xl text-cyan-600' /></li>
            <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl relative top-10 flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <HiMiniCurrencyRupee className='text-8xl text-gray-800' /></li>
            <li className='w-14 h-14 md:w-24 md:h-24 lg:w-34 lg:h-34 shadow-xl flex justify-center items-center hover:scale-95' style={{
              transition: "all .3s linear"
            }}>
              <CgProfile className='text-8xl text-blue-500' /></li>
          </ul>
        </div>
      </div>
      <div className=''>
        <div className=' w-full lg:w-[700px] min-h-[500px] m-auto p-4'>
          <h1 className='text-4xl text-gray-600 text-center font-bold'>Terms And Conditions</h1>
          <p className='text-xl leading-7 mt-4 text-slate-500 font-medium'>The terms and conditions for a debit card outline the rules and responsibilities for cardholders, ensuring safe and secure usage. Cardholders must meet the bank’s eligibility criteria and are responsible for keeping their card details and PIN confidential. The debit card is linked directly to the holder's bank account, allowing for transactions such as purchases and withdrawals, subject to available funds. Fees may apply for specific services, including ATM withdrawals or foreign transactions. The bank reserves the right to suspend or terminate the card if the cardholder violates terms or engages in fraudulent activities. Cardholders must notify the bank immediately in case of loss, theft, or unauthorized transactions. The bank also holds the right to change terms and conditions with prior notice, and any disputes will be governed by applicable local laws.</p>

          <ul className=' lg:ml-6 flex flex-wrap gap-4 justify-center mt-20'>
            <li className='font-bold p-4 rounded-md bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative  lg:top-10 flex-shrink-0' style={{
              transition: "all .3s linear"
            }}>
              <BiMoneyWithdraw className='text-8xl' /><span className='text-2xl'>Withdraw</span>
            </li>
            <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 flex-shrink-0' style={{
              transition: "all .3s linear"
            }}>
              <CiBookmarkCheck className='text-8xl' /><span className='text-2xl'>Check Balance</span>
            </li>
            <li className='font-bold p-4 rounded-md  bg-gray-800 text-white w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 relative lg:top-10 flex-shrink-0' style={{
              transition: "all .3s linear"
            }}>
              <MdSecurity className='text-8xl' /><span className='text-2xl'> PIN and Security</span>
            </li>
            <li className='font-bold p-4 rounded-md  bg-gray-300 text-black w-[300px] h-[240px] shadow-md shadow-blue-400 flex flex-col justify-center items-center gap-5 hover:scale-95 flex-shrink-0 ' style={{
              transition: "all .3s linear"
            }}>
              <BsCashCoin className='text-8xl' /><span className='text-2xl'>Deposite</span>
            </li>
          </ul>
          <p className='text-[16px] leading-7 text-gray-600 rounded-xl font-medium bg-white p-2 mt-20'>At YourBank, we are more than just a bank; we are your partner in building a strong financial future. Join us today and experience the difference of banking with a company that truly cares about your success.</p>
        </div>
      </div>
    </>
  )
}

export default Card