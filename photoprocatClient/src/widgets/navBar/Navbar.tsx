import { useRef, FC, memo } from 'react';
import { LoginNavBar } from '../../features/loginNavBar/LoginNavBar';
import Loader from '../../shared/UI/loader/Loader';
import './navbar.scss';
import BodyNavBar from './bodyNavBar/BodyNavBar';
import { useAppSelector } from '../../shared/hooks/reduxHooks';
import useBodyFixed from '../../shared/hooks/useBodyFixed';
import useScroll from '../../shared/hooks/useScroll';
import { selectLoader, selectMenu, selectPassSucc } from '../../entities/navBar/model/navBarSelectors';

const Navbar: FC = () => {
  const loader = useAppSelector(selectLoader);
  const passSucc = useAppSelector(selectPassSucc);
  const menu = useAppSelector(selectMenu);
  
  const navbarRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { scroll } = useScroll(navbarRef);
  useBodyFixed(menu);

  return (
    <header ref={navbarRef} className={scroll ? 'Navbar active' : 'Navbar'}>
      <BodyNavBar />
      <LoginNavBar />
      <div ref={loaderRef} className="Navbar__loader">
        Войдите в аккаунт
      </div>
      {passSucc && (
        <div className="Registration__successfullReg">
          пароль успешно изменен
        </div>
      )}
      {loader && (
        <div className="Registration__loader">
          <Loader />
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);
