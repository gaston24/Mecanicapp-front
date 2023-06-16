// import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function HorariosModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect( () => {
    openModal();
 }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>Lunes:</div>
        <div>Martes:</div>
        <div>Miercoles:</div>
        <div>Jueves:</div>
        <div>Viernes:</div>
        <form>
        </form>
      </Modal>
    </div>
  );
}

export default HorariosModal;