import React, { useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import Header from './component/Header/Header'

const App = () => {

  const [isLogin,setIsLogin] = useState(false);

  return (
    <div>
      <Header isLogin={isLogin}/>
      <Outlet context={{setIsLogin}}/>
    </div>
  )
}

export default App