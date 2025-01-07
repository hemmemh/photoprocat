import './leftTopFooter.scss';
import { memo } from 'react';

const LeftTopFooter = () => {
  return (
    <div className="topFooter__left leftTopFooter">
      <div className="leftTopFooter__icon _icon-mail"></div>
      <div className="leftTopFooter__texts">
        <div className="leftTopFooter__topText">Подпишитесь</div>
        <div className="leftTopFooter__bottomText">на новости и акции</div>
      </div>
    </div>
  );
};
export default memo(LeftTopFooter);
