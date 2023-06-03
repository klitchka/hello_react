import React from 'react';

const HappyButton = ({ isHappy, updateStatus }) => {
  const handleClick = () => {
    const newValue = !isHappy;
    updateStatus('happy', newValue);
  };

  return (
    <button onClick={handleClick}>{isHappy ? 'Yes' : 'No'}</button>
  );
};

export default HappyButton;
