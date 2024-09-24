import { memo } from 'react';
import './mainPage_404.scss';

const MainPage_404 = () => {
  return (
    <div className="Page404__container">
      <div className="Page404__body">
        <img src={require('../../images/404/404.png')} alt="404" />
      </div>
    </div>
  );
};

export default memo(MainPage_404);
