import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { catalogSlice } from '../../../entities/catalog/model/CatalogSlice';

import './menuCatalog.scss';
import {
  ADMIN_ROUTE,
  CATALOG_ROUTE,
  NEWS_ROUTE,
} from '../../../app/config/routs';
import { selectTypes } from '../../../entities/catalog/model/catalogSelectors';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/reduxHooks';
import useMenu from '../../../shared/hooks/useMenu';
import { getAllTypes, IType } from '../../../shared/https/typesApi';
import { selectMenu } from '../../../entities/navBar/model/navBarSelectors';
import { navbarSlice } from '../../../entities/navBar/model/NavBarSlice';

export const MenuCatalog = () => {
  const menu = useAppSelector(selectMenu);
  const types = useAppSelector(selectTypes);
  const dispatch = useAppDispatch();
  const { setMenu } = navbarSlice.actions;
  const { setTypes } = catalogSlice.actions;
  const navigate = useNavigate();
  const spoilerRef = useRef<HTMLDivElement>(null);
  const menuIcon = useRef<Element | null>(null);
  useMenu({ spoilerRef, menuIcon });

  useEffect(() => {
    getAllTypes().then((data) => {
      dispatch(setTypes(data));
    });
    menuIcon.current = document.querySelector('.Navbar__menu');
  }, []);

  const onNavigate = (el: IType) => {
    navigate({ pathname: CATALOG_ROUTE, search: `?type=${el._id}` });
    dispatch(setMenu(false));
  };

  return (
    <div
      ref={spoilerRef}
      className={
        menu
          ? 'Navbar__catalog catalogNavbar active'
          : 'Navbar__catalog catalogNavbar'
      }
    >
      <div className="catalogNavbar__left">
        <div className="catalogNavbar__name">
          <span>•</span>Каталог
        </div>
        <div className="catalogNavbar__items">
          {types.map((el) => (
            <div
              key={el.name}
              onClick={() => onNavigate(el)}
              className="catalogNavbar__item"
            >
              {el.name}
            </div>
          ))}
        </div>
      </div>

      <div className="catalogNavbar__right">
        <div onClick={() => navigate('*')} className="catalogNavbar__item_two">
          О компании
        </div>
        <div onClick={() => navigate('*')} className="catalogNavbar__item_two">
          Правила
        </div>
        <div
          onClick={() => navigate(NEWS_ROUTE)}
          className="catalogNavbar__item_two"
        >
          Новости
        </div>
        <div onClick={() => navigate('*')} className="catalogNavbar__item_two">
          Контакты
        </div>
      </div>
    </div>
  );
};
