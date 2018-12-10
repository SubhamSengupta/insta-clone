import React from "react";
import PhotoGrid from "../PhotoGrid";
import PhotoScroll from "../PhotoScroll";
import PhotoModal from "../PhotoModal";
import "./styles.css";

class PhotoHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  openModal = photo => e => {
    this.setState({
      openModal: true,
      selectedPhotoId: photo.id
    });
  };

  getPhotoData = (photos, photoId) => {
    let photoData = {};
    photos.forEach(photo => {
      if (photo.id === photoId) {
        photoData = photo;
      }
    });
    return photoData;
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      openModal: false
    });
  };

  deletePhoto = photo => () => {
    if (window.confirm("Are you sure to delete this photo?")) {
      this.props.deletePhoto(photo);
      this.setState({
        ...this.state,
        openModal: false
      });
    }
  };

  handleLike = photoId => e => {
    e.stopPropagation();
    this.props.handleLike(photoId);
  };

  render() {
    const { type = "GRID", photos } = this.props;
    const photoData = this.getPhotoData(photos, this.state.selectedPhotoId);
    return (
      <div className={`app-photo-holder ${type}`.trim()}>
        {photos.map(photo => {
          if (type === "GRID") {
            return (
              <PhotoGrid
                key={Math.random()}
                photo={photo}
                openModal={this.openModal}
                handleLike={this.handleLike}
              />
            );
          }
          if (type === "SCROLL") {
            return (
              <PhotoScroll
                key={Math.random()}
                photo={photo}
                deletePhoto={this.deletePhoto}
                handleLike={this.handleLike}
              />
            );
          }
          return false;
        })}
        {this.state.openModal && Object.keys(photoData).length && (
          <PhotoModal
            closeModal={this.closeModal}
            photo={photoData}
            deletePhoto={this.deletePhoto}
            handleLike={this.handleLike}
          />
        )}
      </div>
    );
  }
}

export default PhotoHolder;
