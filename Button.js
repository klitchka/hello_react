import React from 'react';

function LikeButton() {
  const [likeCount, setLikeCount] = React.useState(
    parseInt(localStorage.getItem('likeCount') || 0)
  );

  function handleButtonClick() {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    localStorage.setItem('likeCount', newLikeCount);
    console.log('♥');
  }

  return (
    <div>
      <button id="like-button" onClick={handleButtonClick}>
        Give love ({likeCount})
      </button>
    </div>
  );
}

export default LikeButton;

