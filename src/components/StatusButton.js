import React, { useState } from 'react';

function Status() {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem('isLiked') === 'true' ? true : false
  );

  function handleButtonClick() {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    localStorage.setItem('isLiked', newIsLiked);
    console.log(newIsLiked ? 'yes' : 'no');
  }

  return (
    <button id="Status" onClick={handleButtonClick}>
      {isLiked ? 'yes' : 'no'}
    </button>
  );
}

export default Status;