import { useEffect, useState } from 'react';
import { useAppSelector } from './reduxHooks';
import { selectCompare } from '../../entities/compareItem/model/compareSelectors';
import { selectBasket } from '../../entities/basketProduct/model/basketSelectors';
import { selectLoves } from '../../entities/loves/model/loveSelectors';


const useCompareBasketLovesAmount = () => {
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

export default useCompareBasketLovesAmount;
