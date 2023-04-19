import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import apiService from '../services/apiService';
import { Loader } from './Loader/Loader';
import { ButtonLoad } from './Button/Button';
import { Modal } from './Modal/Modal';
import { IAppState } from '../types/appTypes';

export class App extends Component<{},IAppState> {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImage: {largeImageURL:""},
  };
  async componentDidUpdate(prevProps:{}, prevState:IAppState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const data = await apiService(searchName, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  toggleShowModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: {largeImageURL:undefined}
    }));
  };
  getLargeImage = (largeImageURL: string | undefined): void => {
    console.log('largeImageUrl', largeImageURL);
    
    this.setState((prevState) => (
      {showModal: !prevState.showModal,
      largeImage: {largeImageURL}}
    ))
  };
  handleFormSubmit = (searchName:string) => {
    this.setState({ searchName, page: 1, images: [] });
  };
  handleButtonLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showButtonLoad = () => {
    return (
      this.state.images.length !== 0 &&
      this.state.page * 12 <= this.state.images.length
    );
  };

  render() {
    const { images, loading, searchName, largeImage:{largeImageURL},showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.getLargeImage} />
        )}
        {this.showButtonLoad() && (
          <ButtonLoad onClick={this.handleButtonLoad} />
        )}
        {showModal ? (
          <Modal onClick={this.toggleShowModal}>
            <img src={largeImageURL} alt={searchName} />
          </Modal>
        ):null}
        <Loader visible={loading} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
