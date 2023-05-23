import React, { useState, useEffect } from 'react';

function HappyButton({ isHappy, updateStatus }) {
  const [happy, setHappy] = useState(isHappy);
  
  useEffect(() => {
    setHappy(isHappy);
  }, [isHappy]);

  function handleButtonClick() {
    updateStatus('happy', !happy);
    setHappy(!happy);
  }

  return (
    <div>
      <button className="status-button" id="happy" onClick={handleButtonClick}>
        {happy ? 'yes' : 'no'}
      </button>
    </div>
  );
}

export default HappyButton;
