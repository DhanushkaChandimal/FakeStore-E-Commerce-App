import Spinner from 'react-bootstrap/Spinner';
import '../styles/loadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div className="loading-overlay">
      <Spinner animation="grow"/>
    </div>
  );
}

export default LoadingIndicator;