import React from "react";
import propTypes from "prop-types";
import PhotoHeader from "../PhotoHeader";
import "./styles.css";

const PhotoScroll = ({ photo, alt, deletePhoto, handleLike }) => (
  <div className="app-photo-scroll">
    <PhotoHeader
      photo={photo}
      deletePhoto={deletePhoto}
      handleLike={handleLike}
    />
    <img src={photo.Image} alt={alt} />
  </div>
);

PhotoScroll.propTypes = {
  photo: propTypes.shape({
    Image: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired
  }),
  alt: propTypes.string,
  deletePhoto: propTypes.func.isRequired,
  handleLike: propTypes.func.isRequired
};

PhotoScroll.defaultProps = {
  alt: "Image"
};

export default PhotoScroll;
