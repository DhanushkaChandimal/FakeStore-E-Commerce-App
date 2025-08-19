import Toast from 'react-bootstrap/Toast';

const ToastMessage = ({ message, setShowToastMessage }) => {
    return (
        <Toast className='toast-message' autohide delay={5000} onClose={() => setShowToastMessage(false)}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default ToastMessage;
