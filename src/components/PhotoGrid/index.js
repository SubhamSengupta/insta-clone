import React from "react";
import propTypes from "prop-types";
import Like from "../Like";
import "./styles.css";

const PhotoGrid = ({ photo, openModal, handleLike }) => (
  <div className="app-photo-grid" onClick={openModal(photo)}>
    <div
      className="image"
      style={{ backgroundImage: `url('${photo.Image}')` }}
    />
    <div className="app-photo-shimmer">
      <Like photo={photo} handleLike={handleLike} />
    </div>
  </div>
);

PhotoGrid.propTypes = {
  photo: propTypes.shape({
    Image: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired
  }),
  openModal: propTypes.func.isRequired
};

export default PhotoGrid;
