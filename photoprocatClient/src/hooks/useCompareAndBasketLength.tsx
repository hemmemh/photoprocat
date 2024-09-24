import { useEffect, useState } from 'react';
import { useAppSelector } from './reduxHooks';
import { selectCompare } from '../store2/selectors/compareSelectors';
import { selectBasket } from '../store2/selectors/basketSelectors';
import { selectLoves } from '../store2/selectors/loveSelectors';

const useCompareAndBasketLength = () => {
  const compare = useAppSelector(selectCompare);
  const basket = useAppSelector(selectBasket);
  const loves = useAppSelector(selectLoves);
  
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
