import React from "react";
import "./styles.css";
import { generateNewPhotoId } from "../../utils/util";

class PhotoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isPhotoSelected: false,
      selectedFile: false
    };
  }

  handleChange = () => {
    const file = this.fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64url = reader.result;
      this.setState({
        ...this.setState,
        isPhotoSelected: true,
        selectedFile: base64url
      });
    };
  };

  submitPhoto = () => {
    const photoObj = this.getPhotoObject(this.state.selectedFile);
    this.props.submitPhoto(photoObj);
  };

  getPhotoObject = url => {
    return {
      Image: url,
      likes: 0,
      timestamp: new Date().toDateString(),
      id: generateNewPhotoId()
    };
  };

  render() {
    return (
      <div className="photo-form">
        <form name="add-photo-form">
          <label>Choose Photo and upload</label>
          <input
            id="add-photo-input"
            type="file"
            accept="image/*"
            onChange={this.handleChange}
            ref={x => (this.fileInput = x)}
          />
          {this.state.isPhotoSelected && (
            <div>
              {this.state.selectedFile && (
                <img
                  className="photo-preview"
                  src={this.state.selectedFile}
                  alt=""
                />
              )}
              <div className="upload-btn" onClick={this.submitPhoto}>
                Upload
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default PhotoForm;
