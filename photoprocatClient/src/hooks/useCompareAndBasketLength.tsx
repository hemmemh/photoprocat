import { useEffect, useState } from 'react';
import { useAppSelector } from './reduxHooks';

const useCompareAndBasketLength = () => {
  const compare = useAppSelector((state) => state.reducer.compare.compare);
  const basket = useAppSelector((state) => state.reducer.basket.basket);
  const loves = useAppSelector((state) => state.reducer.love.loves);
  const [compareLength, setCompareLength] = useState(0);
  const [basketLength, setBasketLength] = useState(0);
  const [lovesLength, setLovesLength] = useState(0);
  useEffect(() => {
    if (!basket) return setBasketLength(0);
    setBasketLength(basket.basketItems.length);
  }, [basket]);

  useEffect(() => {
    if (!compare) return setCompareLength(0);
    setCompareLength(compare.compareItems.length);
  }, [compare]);

  useEffect(() => {
    if (!loves) return setLovesLength(0);
    setLovesLength(loves.lovesItems.length);
  }, [loves]);

  return { compareLength, basketLength, lovesLength };
};

export default useCompareAndBasketLength;
