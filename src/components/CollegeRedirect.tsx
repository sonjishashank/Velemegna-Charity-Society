// CollegeRedirect.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Open the external site in a new tab
    window.open('https://ssalinscollegeofoptometry.com/', '_blank');

    // Redirect the main tab back to the homepage
    navigate('/', { replace: true });
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default CollegeRedirect;
