import './leftFooterBottom.scss';
import { memo } from 'react';

const LeftFooterBottom = () => {
  return (
    <div className="bottomFooter__left left-bottom-footer">
      <div className="left-bottom-footer__title">
        <img src={require('../../../../images/navbar/logo.png')} alt="" />
      </div>
      <div className="left-bottom-footer__text">
        Самый удобный в Москве сервис аренды фото, видео и кинотехники
      </div>
      <div className="left-bottom-footer__conf">
        © 2015 – 2019 Fotoprokat 24
      </div>
    </div>
  );
};
export default memo(LeftFooterBottom);
