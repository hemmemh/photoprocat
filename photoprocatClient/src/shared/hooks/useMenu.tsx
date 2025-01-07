import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from './reduxHooks';
import { navbarSlice } from '../../entities/navBar/model/NavBarSlice';

const useMenu = ({
  spoilerRef,
  menuIcon,
}: {
  spoilerRef: React.RefObject<HTMLDivElement>;
  menuIcon: React.MutableRefObject<Element | null>;
}) => {
  const dispatch = useAppDispatch();
  const { setMenu } = navbarSlice.actions;

  useEffect(() => {
    document.addEventListener('click', addClick);

    return () => {
      document.removeEventListener('click', addClick);
    };
  }, []);
  
  const addClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!spoilerRef.current?.contains(target) && target !== menuIcon.current) {
      dispatch(setMenu(false));
    }
  }, []);


};

export default useMenu;
