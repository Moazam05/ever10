import React from 'react'
import { Modal } from 'reactstrap'
import ContactForm from '../contact-form'

const FormModal = () => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ContactForm />
      </Modal>
    </div>
  );
}

export default FormModal;