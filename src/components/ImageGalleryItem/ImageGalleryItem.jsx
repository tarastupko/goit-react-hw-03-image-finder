import React from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ img, largeImageURL, tags, showModal }) => {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={
          img || 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'
        }
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};