import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { UserContext, UserDispatchContext } from '../util/appContext';

const Post = () => {
  const router = useRouter()
  const props = router.query
  const {modal, wallets} = useContext(UserContext);
  const {setUserDetails, setWallets, upsertWallets, saveNFTs } = useContext(UserDispatchContext);

  let currentWallet;
  useEffect(()=>{
    if(props.id && wallets[props.id]?.nfts == undefined){
      currentWallet = props.id;
      saveNFTs(props.id);
    }
  }, [props]);

  return <div className={'col-10'} style={{display: 'flex', flexDirection: 'column',}}>
  <main className={styles.main} style={{padding: 40, maxWidth: '100%'}}>

  {wallets[props.id]?.nfts?.ownedNfts && (wallets[props.id].nfts.ownedNfts).map((item) => {
    return <div key={item.title} style={{maxWidth: '100%', overflowX: 'scroll'}} className={'card'}>
      <h4>{item.title}</h4>
      {JSON.stringify(item)}
      </div>
  })}
  {/* {NFTs[props.id] && JSON.stringify(NFTs[props.id])} */}
  </main>
  </div>
}

export default Post