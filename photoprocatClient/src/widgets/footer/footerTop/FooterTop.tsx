import './footerTop.scss';
import { memo } from 'react';
import LeftTopFooter from './leftTopFooter/LeftTopFooter';
import CenterTopFooter from './centerTopFooter/CenterTopFooter';
import RightCenterFooter from './rightCenterFooter/RightCenterFooter';

const FooterTop = () => {
  return (
    <div className="topFooter">
      <div className="topFooter__container">
        <div className="topFooter__body">
          <LeftTopFooter />
          <CenterTopFooter />
          <RightCenterFooter />
        </div>
      </div>
    </div>
  );
};
export default memo(FooterTop);
