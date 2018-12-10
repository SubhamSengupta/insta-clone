import React, { Component } from "react";
import PageWrapper from "../PageWrapper";
import PageHeader from "../PageHeader";
import Profile from "../Profile";
import PhotoHolder from "../PhotoHolder";
import AddPhotoForm from "../AddPhotoForm";
import TabSwitcher from "../TabSwitcher";
import CONSTANTS from "../../constants";
import DP from "../../assets/dp.jpg";
import { getPhotoData } from "../../data";
import { addIdTagToPhotos } from "../../utils/util";

import "./styles.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: CONSTANTS.activeTab,
      photos: [],
      openAddPhotoModal: false
    };
  }

  componentDidMount = () => {
    this.setPhotos();
  };

  addPhoto = () => () => {
    this.setState({
      ...this.setState,
      openAddPhotoModal: true
    });
  };

  handleClick = tabName => () => {
    this.setState({ activeTab: tabName });
  };

  setPhotos = () => {
    // search for localStorage first, if empty then get data from api
    const localState = this.deserealizeData();
    if (localState) {
      this.setState({
        ...localState,
        activeTab: CONSTANTS.activeTab,
        openAddPhotoModal: false
      });
    } else {
      getPhotoData().then(responseJson =>
        this.setState({
          ...this.state,
          photos: addIdTagToPhotos(responseJson)
        })
      );
    }
  };

  closeAddPhotoMOdal = () => {
    this.setState({
      ...this.state,
      openAddPhotoModal: false
    });
  };

  handleSubmitPhoto = photo => {
    const photos = this.state.photos;
    photos.unshift(photo);
    this.setState(
      {
        ...this.state,
        photos,
        openAddPhotoModal: false
      },
      () => {
        // handles serialization
        this.serializeData();
      }
    );
  };

  handleDeletePhoto = photo => {
    const id = photo.id;
    const photos = [];
    this.state.photos.forEach(photo => {
      if (photo.id !== id) {
        photos.push(photo);
      }
    });

    this.setState(
      {
        ...this.setState,
        photos
      },
      () => {
        // handles serialization
        this.serializeData();
      }
    );
  };

  handleLike = photoId => {
    const newPhotos = this.state.photos.map(photo => {
      if (photoId === photo.id) {
        return {
          ...photo,
          isLiked: !photo.isLiked,
          likes: photo.isLiked ? photo.likes - 1 : photo.likes + 1
        };
      }
      return photo;
    });

    this.setState(
      {
        ...this.state,
        photos: newPhotos
      },
      () => {
        // handles serialization
        this.serializeData();
      }
    );
  };

  serializeData = () => {
    const stringifiedState = JSON.stringify(this.state);
    localStorage.setItem("localState", stringifiedState);
  };

  deserealizeData = () => {
    return JSON.parse(localStorage.getItem("localState"));
  };

  render() {
    return (
      <PageWrapper className="app-home-page">
        <PageHeader />
        {this.state.openAddPhotoModal && (
          <AddPhotoForm
            closeModal={this.closeAddPhotoMOdal}
            submitPhoto={this.handleSubmitPhoto}
          />
        )}
        <div className="app-home-page-content flex mob-flex-col">
          <Profile
            name={CONSTANTS.name}
            imageUrl={DP}
            address={CONSTANTS.address}
            followersCount={CONSTANTS.followersCount}
          />
          <div className="app-timeline">
            <TabSwitcher
              activeTab={this.state.activeTab}
              handleClick={this.handleClick}
              addPhoto={this.addPhoto}
            />
            {this.state.activeTab === "GRID" && (
              <PhotoHolder
                type={"GRID"}
                photos={this.state.photos}
                deletePhoto={this.handleDeletePhoto}
                handleLike={this.handleLike}
              />
            )}
            {this.state.activeTab === "SCROLL" && (
              <PhotoHolder
                type={"SCROLL"}
                photos={this.state.photos}
                deletePhoto={this.handleDeletePhoto}
                handleLike={this.handleLike}
              />
            )}
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default HomePage;
