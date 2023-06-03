import React from 'react';

const HealthyButton = ({ isHealthy, updateStatus }) => {
  const handleClick = () => {
    const newValue = !isHealthy;
    updateStatus('healthy', newValue);
  };

  return (
    <button onClick={handleClick}>{isHealthy ? 'Yes' : 'No'}</button>
  );
};

export default HealthyButton;
