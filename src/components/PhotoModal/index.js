import React from "react";
import propTypes from "prop-types";
import ModalShimmer from "../ModalShimmer";
import PhotoHeader from "../PhotoHeader";
import "./styles.css";

const PhotoModal = ({ photo, alt, closeModal, deletePhoto, handleLike }) => (
  <ModalShimmer closeModal={closeModal}>
    <div className="modal-img">
      <PhotoHeader
        photo={photo}
        deletePhoto={deletePhoto}
        handleLike={handleLike}
      />
      <img className="img" src={photo.Image} alt={alt} />
    </div>
  </ModalShimmer>
);

PhotoModal.propTypes = {
  photo: propTypes.shape({
    Image: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    timestamp: propTypes.string.isRequired
  }),
  alt: propTypes.string,
  closeModal: propTypes.func.isRequired,
  deletePhoto: propTypes.func.isRequired,
  handleLike: propTypes.func.isRequired
};

PhotoModal.defaultProps = {
  alt: "Image"
};

export default PhotoModal;
