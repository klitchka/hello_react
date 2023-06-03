import React from 'react';

const LoveButton = ({ isLove, updateStatus }) => {
  const handleClick = () => {
    const newValue = !isLove;
    updateStatus('love', newValue);
  };

  return (
    <button onClick={handleClick}>{isLove ? 'Yes' : 'No'}</button>
  );
};

export default LoveButton;
