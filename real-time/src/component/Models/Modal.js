// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  console.log(children)
  return ReactDOM.createPortal(
    <div className="modal-overlay">
   
      <div className="modal-content">{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
