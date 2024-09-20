import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from 'react';

const useItemsClick = ({
  actionRef,
  actionRef2,
  setitemsView,
}: {
  actionRef: RefObject<HTMLDivElement>;
  actionRef2: RefObject<HTMLDivElement>;
  setitemsView: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    document.addEventListener('click', addClick);

    return () => {
      document.removeEventListener('click', addClick);
    };
  }, []);

  const addClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (actionRef.current && actionRef2.current) {
      if (
        !actionRef2.current.contains(target) &&
        target !== actionRef.current
      ) {
        setitemsView(false);
      }
    }
  }, []);
};

export default useItemsClick;
