import React, { useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import Header from './component/Header/Header'
import HandleAccountProvider from './component/Store/AccounDataStore';

const App = () => {

  const [isLogin,setIsLogin] = useState(false);

  
  return (
    <HandleAccountProvider>
      <Header isLogin={isLogin}/>
      <Outlet context={{setIsLogin}}/>
      {/* <Header/>
      <Outlet/> */}
    </HandleAccountProvider>
  )
}

export default App