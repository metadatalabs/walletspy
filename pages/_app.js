import '../styles/globals.css'
import { UserProvider } from '../util/appContext'
import SideBar from '../components/SideBar';
import Modal from '../components/Modal'

function MyApp({ Component, pageProps }) {
  return <>
  <UserProvider>
  <link rel="stylesheet" href="https://unpkg.com/chota@latest"></link>
  <div style={{display: 'flex', flexDirection: 'row', maxWidth: '100vw'}}>

  <SideBar />
  <Component {...pageProps} />
  </div>
  {<Modal onClose={()=>{setModal(null)}} />}

  </UserProvider>
  </>
}

export default MyApp
