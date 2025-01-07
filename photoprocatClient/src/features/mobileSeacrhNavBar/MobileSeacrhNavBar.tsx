import { memo } from 'react';
import './mobileSearchNavBar.scss';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';
import useSearch from '../../shared/hooks/useSearch';
import { selectFilterCatalog, selectSearch } from '../../entities/navBar/model/navBarSelectors';
import { navbarSlice } from '../../entities/navBar/model/NavBarSlice';

export const MobileSeacrhNavBar = memo(() => {
  const search = useAppSelector(selectSearch);
  const filter = useAppSelector(selectFilterCatalog);
  const dispatch = useAppDispatch();
  const { setSearch } = navbarSlice.actions;
  const { setfilterTimeOn } = useSearch();

  return (
    <div
      className={
        search
          ? 'Navba__searchBlockMobile searchBlockMobile active'
          : 'Navbar__searchBlockMobile searchBlockMobile'
      }
    >
      <div className="searchBlockMobile__container">
        <div className="searchBlockMobile__body">
          <div className="searchBlockMobile__search">
            <input
              type="text"
              value={filter}
              onChange={(e) => setfilterTimeOn(e.target.value)}
              className="searchBlockMobile__text"
              placeholder="Начните поиск"
            />
            <div className="searchBlockMobile__icon _icon-search"></div>
          </div>
          <div
            onClick={() => dispatch(setSearch(false))}
            className="searchBlockMobile__exit"
          ></div>
        </div>
      </div>
    </div>
  );
});
