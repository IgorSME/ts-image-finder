import React from 'react';
import { IImageGaleryItem } from '../../types/appTypes';
import { Gallery, Image } from './ImageGalleryItem.styled';

export const  ImageGalleryItem:React.FC<IImageGaleryItem> = ({ src, largeImageURL, onClick })=> {
  return (
    <Gallery>
      <Image src={src} alt="" onClick={() => onClick(largeImageURL)} />
    </Gallery>
  );
}
