import React from 'react';
import PropTypes from 'prop-types';

function LikeButton({ text }) {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleButtonClick() {
    setLikeCount(likeCount + 1);
    console.log('click');
  }

  return (
    <button id="like-button" onClick={handleButtonClick}>
      {text} ({likeCount})
    </button>
  );
}

LikeButton.propTypes = {
  text: PropTypes.string,
};

export default LikeButton;
