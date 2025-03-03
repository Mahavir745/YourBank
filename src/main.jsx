import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import CreateAccount from './component/CreateAccount/CreateAccount.jsx';
import Login from './component/Login/Login.jsx';
import ApplicationStatus from './component/ApplicationStatus/ApplicationStatus.jsx';
import PaymentMode from './component/Payment/PaymentMode.jsx';
import AtmForm from './component/AtmForm/AtmForm.jsx';
import Profile from './component/Profile/Profile.jsx'
import Home from './component/Home/Home.jsx'
import Card from './component/Card/Card.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home/>}/>
      <Route path='/createAccount' element={<CreateAccount/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/applyAtm' element={<AtmForm/>}/>
      <Route path='/application_status' element={<ApplicationStatus/>}/>
      <Route path='/payment' element={<PaymentMode/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/card' element={<Card/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
