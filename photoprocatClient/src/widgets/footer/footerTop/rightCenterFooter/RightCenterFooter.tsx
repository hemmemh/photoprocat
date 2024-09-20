import './rightCenterFooter.scss';
import { memo } from 'react';

const RightCenterFooter = () => {
  return (
    <div className="centerTopFooter__right rightCenter">
      <div className="rightCenter__phone _icon-phone">Заказать звонок</div>
    </div>
  );
};
export default memo(RightCenterFooter);
