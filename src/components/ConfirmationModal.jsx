import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = ({ message, showConfirmationModal, onClose, onConfirm }) => {
  return (
        <Modal show={showConfirmationModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onConfirm}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;