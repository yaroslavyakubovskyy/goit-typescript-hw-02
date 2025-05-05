import { FC, useEffect } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { ImageModalProps } from '../../types';

Modal.setAppElement('#root');
const ImageModal: FC<ImageModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  const { urls, alt_description, user, likes } = data;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img
        src={urls.regular}
        alt={alt_description || 'Large Image'}
        className={s.image}
      />
      <div className={s.infoOverlay}>
        <div className={s.modalInfo}>
          <p>Author: {user?.name}</p>
          <p>Likes: {likes}</p>
        </div>
        <button className={s.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
