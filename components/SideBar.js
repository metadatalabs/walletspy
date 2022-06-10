import { UserContext, UserDispatchContext } from '../util/appContext'
import { useContext } from 'react';
import Link from 'next/link'
import AddWallet from './AddWallet';

export default function SideBar(props){

  const {wallets} = useContext(UserContext);
  const {setModal} = useContext(UserDispatchContext);

    return <>
   <div className={"col-2"} style={{backgroundColor: '#d5d5d5', padding: 20}}>
        <Link href="/">
          <a>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
          <img style={{maxWidth: 70, marginTop: 30}} src="/logo.png" />
          <h4>Walletspy</h4>
        </div>
        </a>
        </Link>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <h4>Saved Wallets</h4>
          <a onClick={()=>{ setModal(<AddWallet />);}}>
            <h3>+</h3>
          </a>
        </div>
        {Object.keys(wallets).map((item)=><div key={item}
          style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: 5, paddingRight: 10}}>►</span> 
            <Link  href={`/w?id=${item}`}>
              <a className='secondary' >
            {item}</a>
            </Link>
          </div>)}
      </div>
  </>
}