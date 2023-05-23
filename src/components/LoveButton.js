import React, { useState, useEffect } from 'react';

function LoveButton({ isInLove, updateStatus }) {
  const [inLove, setInLove] = useState(isInLove);

  useEffect(() => {
    setInLove(isInLove);
  }, [isInLove]);

  function handleButtonClick() {
    updateStatus('inLove', !inLove);
    setInLove(!inLove);
  }

  return (
    <div>
      <button className="status-button" id="love" onClick={handleButtonClick}>
        {inLove ? 'yes' : 'no'}
      </button>
    </div>
  );
}

export default LoveButton;
