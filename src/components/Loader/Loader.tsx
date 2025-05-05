import { FC } from 'react';
import s from './Loader.module.css';
import { DotLoader } from 'react-spinners';

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <DotLoader size={50} color="#4d5ae5" />
    </div>
  );
};

export default Loader;
