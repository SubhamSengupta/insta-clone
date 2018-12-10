import React from "react";
import propTypes from "prop-types";
import "./styles.css";

const Like = ({ photo, handleLike }) => (
  <div className="like flex">
    <div
      className={"like-icon" + (photo.isLiked ? " liked" : "")}
      onClick={handleLike(photo.id)}
    />
    <span className="like-count">{photo.likes} likes</span>
  </div>
);

Like.propTypes = {
  photo: propTypes.shape({
    Image: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired,
    isLiked: propTypes.bool
  }),
  handleLike: propTypes.func.isRequired
};

Like.defaultProps = {
  photo: {
    isLiked: false
  }
};

export default Like;
