import { useAppSelector } from '../../hooks/reduxHooks';
import useSearch from '../../hooks/useSearch';
import Button from '../../components/UI/button/Button';
import './searchNavBar.scss';

export const SearchNavBar = () => {
  const { search, filter } = useAppSelector((state) => state.reducer.navbar);
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
};
