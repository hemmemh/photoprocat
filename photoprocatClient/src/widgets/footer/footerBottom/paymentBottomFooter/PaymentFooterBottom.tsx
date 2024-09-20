import './paymentFooterBottom.scss';
import { memo } from 'react';

const PaymentFooterBottom = () => {
  return (
    <div className="bottomFooter__payments payment-bottom-footer">
      <div className="payment-bottom-footer__payment">
        <img src={require('../../../../images/footer/payment/1.png')} alt="" />
      </div>
      <div className="payment-bottom-footer__payment">
        <img src={require('../../../../images/footer/payment/2.png')} alt="" />
      </div>
      <div className="payment-bottom-footer__payment">
        <img src={require('../../../../images/footer/payment/3.png')} alt="" />
      </div>
    </div>
  );
};
export default memo(PaymentFooterBottom);
