import { useContext } from "react";
import { UserContext, UserDispatchContext } from '../util/appContext';

export default function Modal({children, onClose}){
    const {modal, NFTs} = useContext(UserContext);
  const {setModal } = useContext(UserDispatchContext);

    return <>
    {modal && <div id="myModal" className={"modal"}>

    <div className={"modal-content"}>
    <span className={"close"} onClick={()=>setModal()}>&times;</span>
        {modal}
    </div>

    </div>}
  </>
}