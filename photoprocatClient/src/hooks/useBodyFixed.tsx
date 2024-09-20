import { useEffect } from 'react';

const useBodyFixed = (menu: boolean) => {
  useEffect(() => {
    if (menu && window.innerWidth <= 767.98) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [menu]);
};

export default useBodyFixed;
