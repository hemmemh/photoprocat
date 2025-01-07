import Button from '../../shared/UI/button/Button';
import './searchNavBar.scss';
import { memo } from 'react';
import { useAppSelector } from '../../shared/hooks/reduxHooks';
import useSearch from '../../shared/hooks/useSearch';
import { selectFilter, selectSearch } from '../../entities/navBar/model/navBarSelectors';

export const SearchNavBar = memo(() => {
  const search = useAppSelector(selectSearch);
  const filter = useAppSelector(selectFilter);
  
  const { setfilterTimeOn } = useSearch();

  return (
    <div
      className={
        search
          ? 'Navbar__searchBlock searchBlock active'
          : 'Navbar__searchBlock searchBlock'
      }
    >
      <div className="searchBlock__container">
        <div className="searchBlock__body">
          <input
            value={filter}
            onChange={(e) => setfilterTimeOn(e.target.value)}
            type="text"
            className="searchBlock__text"
            placeholder="Начните поиск"
          />
          <Button>Приступить к поиску</Button>
        </div>
      </div>
    </div>
  );
});
