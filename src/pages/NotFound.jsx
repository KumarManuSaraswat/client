// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The workout you are looking for doesn't exist.</p>
      <Link to="/">Return to Home</Link>
    </main>
  );
};

export default NotFound;