import React, {useState,useEffect} from 'react'
import axios from 'axios';

const LikeButtonComponent = ({likes, handleClick}) => {

  const buttonClick = () => {
    handleClick()
  }
  return (
        <div>
          <button
            className="button"
            onClick={buttonClick}
          >
            <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
          <div>{likes}</div>
        </div>
      );
      // if (likes === 1) {
      //   return (
      //     <div>
      //       <button className="button" onClick={this.addLike}>
      //         <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
      //       </button>
      //     </div>
      //   );
      // }
      // if (likes > 1) {
      //   return (
      //     <div>
      //       <button className="button" onClick={this.addLike}>
      //         <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
      //         {likes}
      //       </button>
      //     </div>
      //   );
      // }
}

export default LikeButtonComponent
