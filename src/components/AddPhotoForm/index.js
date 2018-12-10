import React from "react";
import ModalShimmer from "../ModalShimmer";
import PhotoForm from "../PhotoForm";
import propTypes from "prop-types";

const AddPhotoForm = ({ closeModal, submitPhoto }) => (
  <div className="add-photo-form">
    <ModalShimmer closeModal={closeModal}>
      <PhotoForm submitPhoto={submitPhoto} />
    </ModalShimmer>
  </div>
);

AddPhotoForm.propTypes = {
  closeModal: propTypes.func.isRequired,
  submitPhoto: propTypes.func.isRequired
};

export default AddPhotoForm;
