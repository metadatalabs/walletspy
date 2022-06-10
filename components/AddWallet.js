import { UserContext, UserDispatchContext } from '../util/appContext';
import { useContext, useState } from 'react';

export default function AddWallet(props){
    const {userDetails, wallets } = useContext(UserContext);
    const {setUserDetails, setWallets, upsertWallets, saveNFTs } = useContext(UserDispatchContext);

    const [value, setValue] = useState('');

    return <>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}}
        placeholder={"wallet address or crypto domain (eg. prnth.eth)"}></input>
        <br />

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <button onClick={()=>{
          upsertWallets({[value]: {}})
          saveNFTs(value);
        }}>Add Wallet</button>
        </div>
        
        
    </>
}