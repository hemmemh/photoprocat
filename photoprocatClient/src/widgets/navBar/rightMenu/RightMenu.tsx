import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE, USER_ROUTE } from '../../../app/config/routs';
import './rightMenu.scss';
import { selectUser } from '../../../entities/user/model/userSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import { selectSearch } from '../../../entities/navBar/model/navBarSelectors';
import { navbarSlice } from '../../../entities/navBar/model/NavBarSlice';

export const RightMenu = () => {
  const navigate = useNavigate();
  const search = useAppSelector(selectSearch);
  const user = useAppSelector(selectUser);
  const { setSearch, setLoginModal } = navbarSlice.actions;
  const dispatch = useAppDispatch();
  const location = useLocation();

  return (
    <div className="menu__right rightMenu">
      <div
        onClick={() =>
          location.pathname === `${CATALOG_ROUTE}` &&
          dispatch(setSearch(!search))
        }
        className="rightMenu__action _icon-search"
      ></div>
      <div
        onClick={() =>
          !user ? dispatch(setLoginModal(true)) : navigate(USER_ROUTE)
        }
        className={
          user
            ? 'rightMenu__action active _icon-cabinet'
            : 'rightMenu__action _icon-cabinet'
        }
      ></div>
    </div>
  );
};

export default memo(RightMenu);
