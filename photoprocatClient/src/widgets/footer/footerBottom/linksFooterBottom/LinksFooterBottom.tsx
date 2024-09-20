import './linksFooterBottom.scss';
import { memo } from 'react';

const LinksFooterBottom = () => {
  return (
    <div className="bottomFooter__links links-bottom-footer">
      <div className="links-bottom-footer__left">
        <div className="links-bottom-footer__top">
          <div className="links-bottom-footer__link">
            <img
              src={require('../../../../images/footer/links/1.png')}
              alt=""
            />
          </div>
          <div className="links-bottom-footer__link">
            <img
              src={require('../../../../images/footer/links/2.png')}
              alt=""
            />
          </div>
          <div className="links-bottom-footer__link">
            <img
              src={require('../../../../images/footer/links/3.png')}
              alt=""
            />
          </div>
          <div className="links-bottom-footer__link">
            <img
              src={require('../../../../images/footer/links/4.png')}
              alt=""
            />
          </div>
          <div className="links-bottom-footer__link">
            <img
              src={require('../../../../images/footer/links/5.png')}
              alt=""
            />
          </div>
        </div>
        <div className="links-bottom-footer__bottom">
          Политика конфиденциальности
        </div>
      </div>
      <div className="links-bottom-footer__right">
        <a href="tel:+1234567890" className="links-bottom-footer__tel">
          +7 495 170-39-18
        </a>
        <div className="links-bottom-footer__adress">
          г. Москва, Проспект мира, дом 12
        </div>
      </div>
    </div>
  );
};
export default memo(LinksFooterBottom);
