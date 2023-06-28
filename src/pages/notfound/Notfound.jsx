import { useLocation } from 'react-router-dom';
import { NFContainer, Links } from './Notfound.styled';
const NotFound = () => {
    const location = useLocation();
  return (
    <NFContainer>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! This page does not exist!</p>
      <Links to="/" state={{ from: location.state?.from ?? '*' }}>
        Back to Home
      </Links>
    </NFContainer>
  );
};

export default NotFound;