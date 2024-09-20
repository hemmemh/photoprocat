import React, { useCallback, useEffect, useState } from 'react';

const useScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const offset = ref.current?.offsetHeight || 0;
    if (scrollTop >= offset / 6) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scroll };
};

export default useScroll;
