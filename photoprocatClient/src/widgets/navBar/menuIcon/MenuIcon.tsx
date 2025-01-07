import { useRef } from 'react';
import './menuIcon.scss';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import { selectMenu } from '../../../entities/navBar/model/navBarSelectors';
import { navbarSlice } from '../../../entities/navBar/model/NavBarSlice';

export const MenuIcon = () => {
  const menu = useAppSelector(selectMenu);
  const dispatch = useAppDispatch();
  const menuIcon = useRef(null);
  const { setMenu } = navbarSlice.actions;

  return (
    <div
      ref={menuIcon}
      onClick={() => dispatch(setMenu(!menu))}
      className="Navbar__menu menu"
    >
      <button
        type="button"
        className={
          menu ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'
        }
      >
        <span></span>
      </button>
    </div>
  );
};
