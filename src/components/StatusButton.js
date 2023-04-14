import React, { useState } from 'react';

const happy = false;
const love = true;
const healthy = true;


function StatusButton(props) {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(props.name) === happy ? false : true
    
  );

  function handleButtonClick() {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    localStorage.setItem(props.name, newIsLiked);
    console.log(newIsLiked ? 'yes' : 'no');
  }

  return (
    <button id="Status" onClick={handleButtonClick}>
      {isLiked ? 'yes' : 'no'}
    </button>
  );
}

export default StatusButton;
