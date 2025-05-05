import { FC } from 'react';
import s from './ImageCard.module.css';
import { ImageCardProps } from '../../types';

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.imageCard} onClick={() => openModal(image)}>
      <img src={urls.small} alt={alt_description || 'Image from Unsplash'} />
    </div>
  );
};

export default ImageCard;
