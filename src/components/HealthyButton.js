import React, { useState, useEffect } from 'react';

function HealthyButton({ isHealthy, updateStatus }) {
  const [healthy, setHealthy] = useState(isHealthy);

  useEffect(() => {
    setHealthy(isHealthy);
  }, [isHealthy]);

  function handleButtonClick() {
    updateStatus('healthy', !healthy);
    setHealthy(!healthy);
  }

  return (
    <div>
      <button className="status-button" id="healthy" onClick={handleButtonClick}>
        {healthy ? 'yes' : 'no'}
      </button>
    </div>
  );
}

export default HealthyButton;
