import { useRef, FC, memo } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import useBodyFixed from '../../hooks/useBodyFixed';
import { LoginNavBar } from '../../features/loginNavBar/LoginNavBar';
import useScroll from '../../hooks/useScroll';
import Loader from '../../components/UI/loader/Loader';
import './navbar.scss';
import BodyNavBar from './bodyNavBar/BodyNavBar';
import { selectLoader, selectMenu, selectPassSucc } from '../../store2/selectors/navBarSelectors';

const Navbar: FC = () => {
  const loader = useAppSelector(selectLoader);
  const passSucc = useAppSelector(selectPassSucc);
  const menu = useAppSelector(selectMenu);
  
  const navbarRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { scroll } = useScroll(navbarRef);
  useBodyFixed(menu);

  return (
    <div ref={navbarRef} className={scroll ? 'Navbar active' : 'Navbar'}>
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
    </div>
  );
};

export default memo(Navbar);
