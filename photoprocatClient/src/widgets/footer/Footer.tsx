import './footer.scss';
import FooterBottom from './footerBottom/FooterBottom';
import FooterTop from './footerTop/FooterTop';
export const Footer = () => {
  return (
    <div className="Footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
