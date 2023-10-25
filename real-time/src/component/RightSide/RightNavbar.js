import React,{useState} from 'react'
import "./RightSideStyle.css"
import Modal from "../Models/Modal"
import UserDetailView from '../Models/UserDetailView';
function RightNavbar() {


  const [showModal, setShowModal] = useState(false);

 
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
<div className='RN-1'>
<div className='RN-2'>
<img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" alt="dd"/>
</div>
<div className='RN-3'>
<h3> User Name</h3>    
</div>
<div className='RN-4'>
    <button onClick={openModal}>View</button>
    {showModal && (
        <Modal >
          <UserDetailView  close={closeModal}/>
          {/* <button onClick={closeModal}>Close Modal</button> */}
        </Modal>
      )}
    </div>
</div>
    </>
  )
}


export default RightNavbar;