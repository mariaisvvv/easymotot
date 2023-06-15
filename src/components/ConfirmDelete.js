import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ConfirmDelete = ({texto, showModal ,setShowModal, handleConfirmDelete}) => {
  return (
    <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Tem a certeza de que quer apagar?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {texto}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
                Apagar
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ConfirmDelete
