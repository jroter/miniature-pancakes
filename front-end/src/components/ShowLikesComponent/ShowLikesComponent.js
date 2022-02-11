import React, {useState, useEffect} from 'react'

// CSS
import "./ShowLikesComponent.css";

const ShowLikesComponent = ({likes}) => {

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
  
  return (
        <div className = 'show-likes-container'>
            &#10084;
            <div className="like-number">{showLikes}</div>
        </div>
      );
}

export default ShowLikesComponent
