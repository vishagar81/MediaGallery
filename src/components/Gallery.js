import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchMediaAction,
  selectImageAction,
  saveImageAction } from '../actions/actions';
import NotificationSystem from 'react-notification-system'
import Photos from './Photos/Photos';

// Gallery Component
class Gallery extends Component {

  constructor(){
    super()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelectImage = this.handleSelectImage.bind(this)
    this.handleSaveImage = this.handleSaveImage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // We want to get images from the API right after our component renders.
  componentDidMount() {
      this.props.dispatch(searchMediaAction('nature'));
  }

  // Dispatches *selectImageAction* when any image is clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  handleSaveImage(selectedImage){
    this.props.dispatch(saveImageAction(selectedImage))
    this.showNotification(selectedImage)
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  showNotification(image){
    this.refs.notificationSystem.addNotification({
      message: image.title + ' saved',
      level: 'success'
    });
  }

  handleKeyPress(event){
    if (event.key === 'Enter') {
      this.handleSearch(event)
    }
  }

  render() {
    const { images, selectedImage } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage ? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
            onKeyPress= {this.handleKeyPress}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <Photos
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
              onHandleSaveImage={this.handleSaveImage}
            />
            <NotificationSystem ref="notificationSystem" />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(Gallery);