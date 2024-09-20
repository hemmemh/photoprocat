import React, { useEffect, FC } from 'react';
import { Footer } from '../widgets/footer/Footer';
import Navbar from '../widgets/navBar/Navbar';

interface Layout {
  children?: React.ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
