import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://danilo-portfolio.netlify.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirection vers le portfolio...</p>
      </div>
    </div>
  );
};

export default Portfolio;