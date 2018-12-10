import React from "react";
import propTypes from "prop-types";
import "./styles.css";
import DEFAULT_DP from "../../assets/default_dp.png";

const Profile = ({
  name,
  imageUrl,
  address,
  followersCount,
  photoCount,
  followingCount
}) => (
  <div className="app-profile-container flex flex-col align-center mob-flex-row">
    <img className="app-profile-picture round" src={imageUrl} alt="dp" />
    <div className="app-profile-details">
      <div className="app-profile-name is-name">{name}</div>
      <div className="app-profile-address is-address">{address}</div>
      <div className="flex flex-col count-details mob-flex-row">
        <div className="count-div">
          <span className="app-profile-followers-tag is-follower-tag">
            photos
          </span>
          <span className="app-profile-followers-count is-count">
            {photoCount}
          </span>
        </div>
        <hr />
        <div className="count-div">
          <span className="app-profile-followers-tag is-follower-tag">
            followers
          </span>
          <span className="app-profile-followers-count is-count">
            {followersCount}
          </span>
        </div>
        <hr />
        <div className="count-div">
          <span className="app-profile-followers-tag is-follower-tag">
            following
          </span>
          <span className="app-profile-followers-count is-count">
            {followingCount}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string,
  address: propTypes.string.isRequired,
  followersCount: propTypes.number,
  photoCount: propTypes.number,
  followingCount: propTypes.number
};

Profile.defaultProps = {
  followersCount: 343,
  imageUrl: DEFAULT_DP,
  photoCount: 214,
  followingCount: 233
};

export default Profile;
