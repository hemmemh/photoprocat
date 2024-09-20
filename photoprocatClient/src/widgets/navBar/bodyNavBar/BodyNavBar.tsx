import useCheckMobileScreen from '../../../hooks/DetectMobileHook';
import RightMenu from '../rightMenu/RightMenu';
import ActionsNavBar from './actionsNavBar/ActionsNavBar';
import Logo from './logo/Logo';
import { MenuCatalog } from './menuCatalog/MenuCatalog';
import { MenuIcon } from './menuIcon/MenuIcon';
import { MobileSeacrhNavBar } from '../../../features/mobileSeacrhNavBar/MobileSeacrhNavBar';
import { NavigationNavBar } from './navigationNavBar/NavigationNavBar';
import { SearchNavBar } from '../../../features/searchNavBar/SearchNavBar';
import Shedule from './shedule/Shedule';
import { memo } from 'react';
import './bodyNavBar.scss';

export const BodyNavBar = () => {
  const isMobile = useCheckMobileScreen(767.98);

  return (
    <div className="coverNavBar">
      <div className="contNavBar">
        <div className="bodyNavBar">
          <MenuIcon />
          <Logo />
          <NavigationNavBar />
          <Shedule />
          <ActionsNavBar />
          <SearchNavBar />
          <RightMenu />
          <MenuCatalog />
        </div>
      </div>
      {isMobile ? <MobileSeacrhNavBar /> : <SearchNavBar />}
    </div>
  );
};

export default memo(BodyNavBar);
