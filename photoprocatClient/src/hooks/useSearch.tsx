import { useState } from 'react';
import { navbarSlice } from '../store2/reducers/NavBarSlice';
import { useAppDispatch } from './reduxHooks';

const useSearch = () => {
  const [filterTime, setfilterTime] = useState<ReturnType<typeof setTimeout>>();
  const dispatch = useAppDispatch();
  const { setFilter, setFilterCatalog } = navbarSlice.actions;

  const setfilterTimeOn = (e: string) => {
    dispatch(setFilter(e));
    if (filterTime) {
      clearTimeout(filterTime);
    }
    setfilterTime(
      setTimeout(() => {
        dispatch(setFilterCatalog(e));
      }, 1000)
    );
  };

  return { setfilterTimeOn };
};

export default useSearch;
