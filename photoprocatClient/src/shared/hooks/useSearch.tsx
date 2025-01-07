import { useState } from 'react';
import { useAppDispatch } from './reduxHooks';
import { navbarSlice } from '../../entities/navBar/model/NavBarSlice';


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
