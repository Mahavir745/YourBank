
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useOutletContext} from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from 'react-icons/bi';
import { BsBank } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const Header = ({isLogin}) => {

  const [menuState, setMenuState] = useState(false);
  const [foundWidth, setFoundWidth] = useState(window.outerWidth)
  const menuRef = useRef()

  
  const HandleToggle = () => {
    setMenuState(state => !state);
  }

  console.log(window.outerWidth)

  useEffect(() => {
    const HandleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuState(false);
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);

    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    }

  }, [])
  return (
    <div className='size-full h-40 bg-gray-900 flex items-center justify-between sm:justify-around p-2 text-white sticky top-0 z-50'>
      <div className=''>
       <h1 className=' text-4xl sm:text-6xl font-bold flex'><span className='text-sky-300'>Your</span><span>Bank</span><BsBank className='pl-2 '/></h1>
      </div>
      {foundWidth < 480 ?
        <div className='relative'>
          {!menuState ? <BiMenu className='text-4xl' onClick={HandleToggle} /> : <RxCross1 className='text-2xl' onClick={HandleToggle} />}
          {menuState &&
            <ul className='flex gap-2 flex-col absolute bg-slate-300 p-2 right-[0px] w-[140px] rounded-md' ref={menuRef}>
              <NavLink className={({ isActive }) => `${isActive ? "text-gray-700" : "text-white"}`} to="/">
                <li className='font-bold hover:bg-slate-400 pl-4 pr-4 pt-2 pb-2 rounded-md'>Home</li>
              </NavLink>
              {!isLogin && <NavLink className={({ isActive }) => `${isActive ? "text-gray-700" : "text-white"}`} to="/createAccount">
                <li className='font-bold hover:bg-slate-400 pl-4 pr-4 pt-2 pb-2 rounded-md text-[14px]'>Create Account/Login</li>
              </NavLink>  }        
              {isLogin && <NavLink className={({ isActive }) => `${isActive ? "text-gray-700" : "text-white"}`} to="/profile">
                <li className='font-bold hover:bg-slate-400 pl-4 pr-4 pt-2 pb-2 rounded-md'><CgProfile className='text-4xl text-gray-700' /></li>
              </NavLink>}
            </ul>}
        </div>
        : <div className='relative'>
          <ul className='flex gap-2 rounded-md items-center'>
            <NavLink className={({ isActive }) => `${isActive ? "text-gray-700 bg-slate-200 rounded-md" : "text-white"}`} to="/">
              <li className='font-bold hover:bg-gray-500 pl-4 pr-4 pt-2 pb-2 rounded-md'>Home</li>
            </NavLink>
            {!isLogin && <NavLink className={({ isActive }) => `${isActive ? "text-gray-700 bg-slate-200 rounded-md" : "text-white"}`} to="/createAccount">
              <li className='font-bold hover:bg-bg-gray-500 pl-4 pr-4 pt-2 pb-2 rounded-md'>Create Account/Login</li>
            </NavLink>}
            {isLogin && <NavLink className={({ isActive }) => `${isActive ? " bg-white text-black rounded-md" : "text-white"}`} to="/profile">
              <li className='font-bold hover:bg-bg-gray-500 pl-4 pr-4 pt-2 pb-2 rounded-md'><CgProfile className='text-4xl' /></li>
            </NavLink>}
            
          </ul>
        </div>}
    </div>
  )
}

export default Header