import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import * as Services from 'services/pixabayAPI';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchTerm: '',
    currentPage: 1,
    showLoadMore: false,
    isModalShown: false,
    modalImage: {},
    galleryData: [],
    loading: false,
    noResults: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchTerm, currentPage } = this.state;

    if (prevState.searchTerm !== searchTerm) {
      this.setState({
        loading: true,
        showLoadMore: false,
        galleryData: [],
        noResults: false,
        currentPage: 1,
      });

      const response = await Services.getImages(searchTerm, currentPage).then(response => response.data);
      const galleryData = response.hits;
      const showLoadMore = response.totalHits > currentPage * 12;
      const loading = false;
      const noResults = response.totalHits === 0;

      this.setState({ galleryData, showLoadMore, loading, noResults });
    }

  if (prevState.currentPage !== currentPage) {
    const response = await Services.getImages(searchTerm, currentPage).then(response => response.data);
    this.setState({ galleryData: response.hits }, () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
  }

  showModal = modalImage => {
    this.setState({ isModalShown: true, modalImage });
  };

  closeModal = () => {
    this.setState({ isModalShown: false });
  };

  handleSearch = async searchTerm => {
    this.setState({ searchTerm });
  };

  handleLoadMore = async () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { showLoadMore, galleryData, isModalShown, modalImage, loading, noResults, searchTerm } = this.state;
    const { showModal, handleSearch, handleLoadMore, closeModal } = this;

    return (
      <AppContainer>
        <Searchbar onSubmit={handleSearch} />
        {loading && <Loader />}
        {noResults ? <p>No results found for '{searchTerm}'</p> : <ImageGallery gallery={galleryData} showModal={showModal} />}
        {showLoadMore && <Button onClick={handleLoadMore}>Load more</Button>}
        {isModalShown && <Modal largeImgObj={modalImage} closeModal={closeModal} />}
      </AppContainer>
    );
  }
}