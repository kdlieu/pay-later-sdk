import React from 'react';
// import styled from 'styled-components';
import Modal from './Modal'

const PayLater = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}></Modal>
      <button onClick={() => setOpen(true)}>Pay Later</button>
    </React.Fragment>
  );
}

export default PayLater;