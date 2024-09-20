import './footerBottom.scss';
import { memo } from 'react';
import LeftFooterBottom from './leftBottomFooter/LeftFooterBottom';
import LinksFooterBottom from './linksFooterBottom/LinksFooterBottom';
import PaymentFooterBottom from './paymentBottomFooter/PaymentFooterBottom';

const FooterBottom = () => {
  return (
    <div className="Footer__bottom bottomFooter">
      <div className="bottomFooter__container">
        <div className="bottomFooter__body">
          <LeftFooterBottom />
          <LinksFooterBottom />
          <PaymentFooterBottom />
        </div>
      </div>
    </div>
  );
};
export default memo(FooterBottom);
