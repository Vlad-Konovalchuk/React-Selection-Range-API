import React from 'react';
import Modal from 'react-modal'

const ModalComponent = ({modalIsOpen, closeModal, children}) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;
