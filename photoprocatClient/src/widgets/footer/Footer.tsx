import { memo } from 'react';
import './footer.scss';
import FooterBottom from './footerBottom/FooterBottom';
import FooterTop from './footerTop/FooterTop';
export const Footer = memo(() => {
  return (
    <footer className="Footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
});
