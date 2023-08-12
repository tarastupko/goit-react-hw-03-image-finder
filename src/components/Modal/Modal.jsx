import React, { Component } from 'react';
import { ModalContainer, ModalLoader, Overlay, CloseButton } from './Modal.style'; 
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal); 
  }

  handleCloseModal = e => {
    if (e.key === 'Escape' || e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImgObj } = this.props;
    return (
      <Overlay onClick={this.handleCloseModal}>
        <ModalContainer>
          <CloseButton onClick={this.props.closeModal}>X</CloseButton> 
          <img
            src={
              largeImgObj.largeImageURL ||
              'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'
            }
            alt={largeImgObj.tags}
          />
          <ModalLoader format={largeImgObj.largeImageURL}/>
          
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImgObj: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};