import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  height: 60%;
  width: 60%;
  margin: auto;
  position: relative;
  background-color: blue;
  border-radius: 4px;
`;

const Modal = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  return (
    <Main>
      <ModalBody>
        <Close onClick={onClose}>Close</Close>
        {children}
      </ModalBody>
    </Main>
  );
}

export default Modal;