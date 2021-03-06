import React, {useState, useEffect} from 'react'
import axios from 'axios';

// CSS
import "./LikeButton.css";

const LikeButtonComponent = ({likes, handleClick}) => {

  const [showLikes, setShowLikes] = useState(0)
  const modifyLikes = () => {
    if (likes > 999) {
      setShowLikes(`${Math.floor(likes/1000)} k+`)
    } else {
      setShowLikes(likes)
    }
  }

  useEffect(() => {
    modifyLikes()
  }, [likes]);
  

  const buttonClick = () => {
    handleClick()
  }
  return (
        <div>
          <button
            className="like-button"
            onClick={buttonClick}
          >
            &#10084;
            <div className="like-number">{showLikes}</div>
          </button>
        </div>
      );
}

export default LikeButtonComponent
