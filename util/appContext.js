import React, { createContext, useEffect, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);
import { getNFTByWallet } from './etherManager';

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }) {
  const [wallets, setWallets] = useState({});
  const [modal, setModal] = useState();
  
  useEffect(()=>{
    if(Object.keys(wallets).length == 0){
      const initWallets = JSON.parse(localStorage.getItem('paarentValueKey')) || {}
      setWallets(initWallets)
    }
  }, [])
  
  useEffect(()=>{
    if(Object.keys(wallets).length == 0) return
    localStorage.setItem("paarentValueKey", JSON.stringify(wallets))
  }, [wallets])
  
  const upsertWallets = (newData) => {
    let newWallets = {...wallets,
      ...newData}
      setWallets(newWallets);
    }
    
    async function saveNFTs(wallet){
      let res = await getNFTByWallet(wallet);
      console.log("got res ", res);
      
      setWallets({
        ...wallets,
        [wallet]: {
          ...wallets[wallet],
          nfts: res
        }
      })
    }
    
    return (
      <UserContext.Provider value={{wallets, modal}}>
      <UserDispatchContext.Provider value={{setWallets, upsertWallets, saveNFTs, setModal}}>
      {children}
      </UserDispatchContext.Provider>
      </UserContext.Provider>
      );
    }
    
    export { UserProvider, UserContext, UserDispatchContext };