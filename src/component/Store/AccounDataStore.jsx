import { createContext, useEffect, useReducer, useState } from "react";

export const handleAccountData = createContext({
  addNewAccount: () => { },
  totalAccount: [],
  foundUser: [],
  addLoginAccount: () => { },
  setFoundUser: () => { },
  updateAtmStatus: () => { }
})


const allNewAccount = JSON.parse(localStorage.getItem("addNewAccount")) || [];
const login = JSON.parse(localStorage.getItem("login")) || {};

const HandleUserAccount = (currentAccount, action) => {
  let newAccount = currentAccount
  switch (action.type) {
    case "CREATE_ACC":
      newAccount = [...currentAccount, action.payload];
      localStorage.setItem("addNewAccount", JSON.stringify(newAccount));
      break;
    case "LOGIN_ACC":
      localStorage.setItem("login", JSON.stringify(action.payload));
      break;
    case "ATM_ACTIVE":
      newAccount = currentAccount.map((ac) => {
        if(ac.newAccountId === action.payload){
          return { ...ac, atm: true };
        }
      })
      localStorage.setItem("addNewAccount", JSON.stringify(newAccount));
      break;
    default:
      console.log("all done");
      break;
  }

  return newAccount;
}

const HandleAccountProvider = ({ children }) => {

  const [totalAccount, dispatchedAccount] = useReducer(HandleUserAccount, allNewAccount);

  const addNewAccount = (data) => {
    dispatchedAccount({
      type: "CREATE_ACC",
      payload: data
    })
  }

  const addLoginAccount = (data) => {
    dispatchedAccount({
      type: "LOGIN_ACC",
      payload: data
    })
  }

  const updateAtmStatus = (id) => {
    dispatchedAccount({
      type: "ATM_ACTIVE",
      payload: id
    })
  }

  const [foundUser, setFoundUser] = useState([]);

  return (
    <handleAccountData.Provider value={{
      addNewAccount,
      totalAccount,
      foundUser,
      setFoundUser,
      addLoginAccount,
      updateAtmStatus
    }}>
      {children}
    </handleAccountData.Provider>
  )
}

export default HandleAccountProvider;