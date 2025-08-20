import Toast from 'react-bootstrap/Toast';

const ToastMessage = ({ message, setShowToastMessage, type="success" }) => {
    const toastClass = `toast-message toast-${type}`;
    return (
        <Toast className={toastClass} autohide delay={5000} onClose={() => setShowToastMessage(false)}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default ToastMessage;
