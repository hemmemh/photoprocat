import { useAppSelector } from '../../hooks/reduxHooks';
import useSearch from '../../hooks/useSearch';
import Button from '../../components/UI/button/Button';
import './searchNavBar.scss';
import { memo } from 'react';
import { selectFilter, selectSearch } from '../../store2/selectors/navBarSelectors';

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
