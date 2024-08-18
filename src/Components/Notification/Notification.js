// src/components/NotificationModal/NotificationModal.js
import React from 'react';
import Modal from 'react-modal';

const NotificationModal = ({ isOpen, message, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notification Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '2rem',
          textAlign: 'center',
        },
      }}
    >
      <h3>{message}</h3>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default NotificationModal;