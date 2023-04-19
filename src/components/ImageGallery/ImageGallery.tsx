import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { IImageGaleryList } from '../../types/appTypes';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery:React.FC<IImageGaleryList> = ({ images, onClick })=> {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}

    </Gallery>
  );
}
