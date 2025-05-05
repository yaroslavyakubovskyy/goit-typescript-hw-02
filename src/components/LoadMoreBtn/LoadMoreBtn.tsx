import { FC } from 'react';
import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore, disabled }) => (
  <button className={s.loadMoreButton} onClick={onLoadMore} disabled={disabled}>
    Load more
  </button>
);

export default LoadMoreBtn;
