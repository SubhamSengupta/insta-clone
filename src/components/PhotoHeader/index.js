import React from "react";
import UploadedBy from "../UploadedBy";
import Like from "../Like";
import propTypes from "prop-types";
import "./styles.css";

const PhotoHeader = ({ photo, deletePhoto, handleLike }) => (
  <div className="header-details flex mob-flex-col">
    <UploadedBy name="Subham" timeStamp={photo.timestamp} />
    <Like photo={photo} handleLike={handleLike} />
    <div className="delete-photo" onClick={deletePhoto(photo)}>
      Delete
    </div>
  </div>
);

PhotoHeader.propTypes = {
  photo: propTypes.shape({
    Image: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired
  }),
  deletePhoto: propTypes.func.isRequired,
  handleLike: propTypes.func.isRequired
};

export default PhotoHeader;
